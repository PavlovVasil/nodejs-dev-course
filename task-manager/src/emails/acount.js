const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.send({
    to: 'vasil@vasilpavlov.com',
    from: 'vasil@vasilpavlov.com',
    subject: 'This is my first email',
    text: 'I hope this works.'
})