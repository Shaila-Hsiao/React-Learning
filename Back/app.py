from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
# from flask_cors import CORS, cross_origin
from flask_session import Session
from config import ApplicationConfig
from models import db, User
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
# set sever side session
sever_session = Session(app)
CORS(app,supports_credentials=True)
db.init_app(app)

with app.app_context():
    db.create_all()



######### get current user###########

@app.route("/@me",methods = ["GET"])
def get_current_user():
    user_id = session.get("user_id")

    # if don't have user session
    if not user_id :
        return jsonify({"error": "UnAuthorized"}),401
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id":user.id,
        "username":user.username,
        "email":user.email
    })
# #######register####################

@app.route("/register",methods=["POST"])

def register_user():
    email = request.json["email"]
    username = request.json["username"]
    password = request.json["password"]


    # check if user(email) exist
    user_exists = User.query.filter_by(email=email).first() is not None
    if user_exists :
        return jsonify({"error": "user already exist"}),409

    hashed_password = bcrypt.generate_password_hash(password)
    # create new user
    new_user = User(email=email,username = username,password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({
        "id":new_user.id,
        "email":new_user.email,
        "username":new_user.username
    })

######## login###########################

@app.route("/login",methods = ["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]


    # check if user(email) exist
    user = User.query.filter_by(email=email).first()
    if user is None :
        return jsonify({"error": "Unauthorized"}),401
    # password check
    if not bcrypt.check_password_hash(user.password,password):
        return jsonify({"error": "Unauthorized, Your password is not correct"}),401
    
    session["user_id"] = user.id

    # if it is success Authorized
    return jsonify({
        "id":user.id,
        "email":user.email,
        "username":user.username
    })

########## logout  ###################
@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"


if __name__ == "__main__":
    app.run(debug=True)