from myModule.connectDB import setting

# insert into DB
def roomInsert(name,roomContent,userID,private_public):
    connection = setting()
    with connection.cursor() as cursor:
            command = f"INSERT INTO `room`(`name`, `roomContent`, `userID`, `private_public`) VALUES ('{name}','{roomContent}','{userID}','{private_public}')"
            cursor.execute(command)
            connection.commit()
