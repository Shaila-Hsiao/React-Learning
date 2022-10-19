from myModule.connectDB import connection,cursor
def modelInfo(roomID,itemID):
    command = f"SELECT * FROM `itemInfo` WHERE roomID = '{roomID}' and itemID = '{itemID}'"
    cursor.execute(command)
    info= cursor.fetchone()
    data = {
        'id':info[0],
        'itemID':info[1],
        'title':info[2],
        'date':info[3],
        'weather':info[4],
        'message':info[5],
        'recordName':info[6],
        'recordPath':info[7],
        'imageName':info[8],
        'imagePath':info[9]
    }
    print(data)
    return data
