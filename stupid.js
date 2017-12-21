
const accountSid = 'AC4480c9415996a5622bdcad84e418d535';
const authToken = '47ee0f912a3c3e9aafb672f600430289';

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to:'16195815682',
    from:'16195471346',
    body:'Finishing up my Portfolio'
})
.then((message) => {console.log(message)})