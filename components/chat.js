var chatroom=new Map();

export function createChatroom()
{   
    var chatroomIBM={name:"IBM",id:1};
    var contentsMap=new Map();
    var userSet=new Set();
    var userMessages=new Set();
    var user1={name:"Anuj",
            id:101};
    var user2={name:"Akshay",
            id:102};
    var user3={name:"Ravi",
            id:103};
    var message1={
        message:"hi",
        id:1
    };
    var message2={
        message:"hello",
        id:2
    };
    var message3={
        message:"how are you",
        id:3
    };

    userSet.add(user1);
    userSet.add(user2);
    userSet.add(user3);
    
    userMessages.add(message1);
    userMessages.add(message2);
    userMessages.add(message3);

    contentsMap.set("Users",userSet);
    contentsMap.set("Messages",userMessages);
    chatroom.set(chatroomIBM,contentsMap);

}

export function getUserList()
    {
        for(var key of chatroom.keys())
        {   
            var chatRoom=chatroom.get(key);
            console.log(key.name);
            for(var users of chatRoom.get("Users"))
            {
                console.log(users);
            }
        }
    }

   export function getMessageList()
    {
        for(var key of chatroom.keys())
        {   
            var chatRoom=chatroom.get(key);
            console.log(key.name+" ");
            for(var messages of chatRoom.get("Messages"))
            {
                console.log(messages);
            }
        }
    }