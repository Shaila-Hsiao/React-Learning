from myModule.connectDB import connection,cursor
def itemInformation(roomID,itemID):
    command = f"SELECT count(itemID) FROM itemInfo WHERE roomID = '{roomID}' and itemID = '{itemID}'"
    cursor.execute(command)
    num = cursor.fetchone()[0]
    if num == 0:
        command = f"SELECT `name` FROM `item` WHERE id = '{itemID}'"
        cursor.execute(command)
        itemName= cursor.fetchone()[0]
        data = {
            'id':"",
            'roomID':"",
            'itemID':"",
            'itemName':itemName,
            'date':"",
            'weather':"",
            'message':"",
            'imagePath':"",
            'recordPath':"",
            'recordName':""
        }
    else:
        # SELECT iteminfo.* ,item.name FROM itemInfo,`item`WHERE iteminfo.itemID = item.id and iteminfo.roomID = '3' and iteminfo.itemID = '1';
        command = f"SELECT iteminfo.* ,item.name FROM itemInfo,item WHERE iteminfo.itemID = item.id and roomID = '{roomID}' and itemID = '{itemID}'"
        cursor.execute(command)
        info= cursor.fetchone()
        data = {
            'id':info[0],
            'roomID':info[1],
            'itemID':info[2],
            'itemName':info[3],
            'date':info[4],
            'weather':info[5],
            'message':info[6],
            'imagePath':info[7],
            'recordPath':info[8],
            'recordName':info[9]
        }
    print(data)
    return data