from myModule.connectDB import connection,cursor
def modelInfo(roomID,itemID):
    # SELECT iteminfo.* ,item.name FROM `itemInfo`,`item`WHERE iteminfo.itemID = item.id and iteminfo.roomID = '3' and iteminfo.itemID = '1';
    command = f"SELECT iteminfo.* ,item.name FROM `itemInfo`,`item` WHERE iteminfo.itemID = item.id and roomID = '{roomID}' and itemID = '{itemID}'"
    cursor.execute(command)
    info= cursor.fetchone()
    data = {
        'id':info[0],
        'roomID':info[1],
        'itemID':info[2],
        'itemname':info[11],
        'title':info[3],
        'weather':info[4],
        'date':info[5],
        'message':info[6],
        'recordName':info[7],
        'recordPath':info[8],
        'imageName':info[9],
        'imagePath':info[10]
    }
    print(data)
    return data

    

# id
# roomID
# itemID
# title
# date
# weather
# message
# recordName
# recordPath
# imageName
# imagePath