const push = require("web-push");

// const keys = push.generateVAPIDKeys();
const vapikeys = {
    publicKey: 'BMwyK-t_ATBA05-9lGES1VgQlVBCGmyMbcEE4UJpzhhqGBQbpKkjdBxsDyzl40_ILXYCn8qRnhYE5IuHOJxf3dk',
    privateKey: 'izDK7ofgkSG8xzcid1LX-jKHdfh9YQ7nvUA0YftPpGo'
  }
  
push.setVapidDetails("jhomani@gmail.com", vapikeys.publicKey, vapikeys.privateKey);

let sub = {
    
}

push.sendNotification(sub, "test message");

console.log(keys)