from myModule.connectDB import connection, cursor
from datetime import datetime
# 從 DB 拿取所有的留言訊息
def allBoardMsg(roomID):
    command = f"SELECT `id`, `date`, `content`, `color`, `msgFrom`, `roomID` FROM `boardmsg` WHERE `roomID`='{roomID}';"
    cursor.execute(command)
    data = cursor.fetchall()
    # result = []
    # # print(data)
    # for msg in data:
    #     content = dict()
    #     content['id'] = msg[0]
    #     content['date'] = msg[1]
    #     content['content'] = msg[2]
    #     content['color'] = msg[3]
    #     content['msgFrom'] = msg[4]
    #     result.append(content)
    return data
# 將訪客留言寫入 DB
def boardMsgInsert(weather,content,color,msgFrom,roomID):
    nowTime = datetime.now()
    currentTime = nowTime.strftime("%Y-%m-%d") # -%H-%M-%S
    try:
        command = f"INSERT INTO `boardmsg`(`date`, `weather`, `content`, `color`, `msgFrom`, `roomID`) VALUES ('{currentTime}', '{weather}', '{content}', '{color}', '{msgFrom}', '{roomID}')"
        cursor.execute(command)
        connection.commit()
        return "success"
    except:
        return "fail"