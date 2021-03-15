const push = require("web-push");

// const keys = push.generateVAPIDKeys();
const vapikeys = {
    publicKey: 'BMwyK-t_ATBA05-9lGES1VgQlVBCGmyMbcEE4UJpzhhqGBQbpKkjdBxsDyzl40_ILXYCn8qRnhYE5IuHOJxf3dk',
    privateKey: 'izDK7ofgkSG8xzcid1LX-jKHdfh9YQ7nvUA0YftPpGo'
  }
  
push.setVapidDetails("mailto:test@code.co.uk", vapikeys.publicKey, vapikeys.privateKey);

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/d6x_-E2TmI8:APA91bFRpo2358sjjJu1Vc-I9nJfaYGBh3BfoIQzk16e1K-i9Tpb025VQAvIeoTe2KcPiBlx2Y1CBnea1MRidpRczKKDxIrJzMq8c6PHqSqHsb9ACL-1IflojZEWYePHjPmexr2Jn6Sr","expirationTime":null,"keys":{"p256dh":"BBztcJN8vWR8V-PaVkdRgInq1xU-fAHJzCoyCkUTlj8rmBZ7zAo2Nr5V6GuioDCHpP_laqy1jCjWMJ4ln3u_uNc","auth":"wo7QJ2c0sAkgkZpVE9HL8w"}};
push.sendNotification(sub, "test message");
