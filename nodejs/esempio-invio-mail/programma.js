var servizioPosta = require('nodemailer');

var postino = servizioPosta.createTransport({
    service: 'gmail',
    auth: {
        user: 'passionejavascript@gmail.com',
        pass: 'C1cc23P4cc56' 
    }
});

postino.sendMail({
    from: 'sender@address',
    to: 'ivan.saracino@cspnet.it',
    subject: 'hello',
    text: 'hello world from node.js!'
}, function(err, info) {
    if (err)
        console.log(err);
    if (info)
        console.log(info);  
});