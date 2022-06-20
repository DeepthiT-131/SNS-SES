var aws = require("aws-sdk");
var ses = new aws.SES({ region: "ap-south-1" });
exports.handler = async function (event) {
  
  const sub=JSON.stringify(event.Records[0].Sns.Subject);
  const msg=JSON.stringify(event.Records[0].Sns.Message);
  var params = {
    Destination: {
      ToAddresses: ["deepthireddy131@gmail.com"]
    },
    Message: {
      Body: {
        Text: { Data: msg},
      },
      Subject: { Data: sub},
    },
    Source: "deepthireddy131@gmail.com",
  };
  
  return ses.sendEmail(params).promise();
};







