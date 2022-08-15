from dotenv import load_dotenv
import os
import redis 
load_dotenv()

class ApplicationConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]
    
    # 紀錄
    SQLALCHEMY_TRACK_MODIFICATION = True
    # 每一次呼叫SQL 函數可以顯示DB發生什麼事
    SQLALCHEMY_ECHO = True
    # 設置DB URI
    SQLALCHEMY_DATABASE_URI = r"sqlite:///./db.sqlite"

    # 設置Server side SESSION 
    SESSION_TYPE="redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    session_REDIS =redis.from_url("redis://127.0.0.1:6379")

