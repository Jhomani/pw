const push = require("web-push");

// const keys = push.generateVAPIDKeys();
const vapikeys = {
    publicKey: 'BMwyK-t_ATBA05-9lGES1VgQlVBCGmyMbcEE4UJpzhhqGBQbpKkjdBxsDyzl40_ILXYCn8qRnhYE5IuHOJxf3dk',
    privateKey: 'izDK7ofgkSG8xzcid1LX-jKHdfh9YQ7nvUA0YftPpGo'
  }
  
push.setVapidDetails("mailto:test@code.co.uk", vapikeys.publicKey, vapikeys.privateKey);

let sub = {
  "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABgT…bWPuI-J2P5ZIe4Q5mQKTI0-Dr7bhUp_ZWoonW3RlqAUNy5mxhGM_XFTAbH4w",
"keys":{"auth":"ZEGmiQ5YMs1q7E3TJHdcDg","p256dh":"BOCFC5c6s5pNnrXbXF_SXs4imM61r9MrP97RIgTvkYVWKUaAgpNw9kuG9xMMPMx-n2CyyQ1K0ky3MCTm3g66_Hk"}
}

push.sendNotification(sub, "test message");
