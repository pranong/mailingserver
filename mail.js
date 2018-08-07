var nodemailer = require('nodemailer');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


app.post('/', (req, res) => {
  const data = req.body;
  const from = data['from'];
  const from_email = data['from_email'];
  const message = data['message'];

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
          user: 'nutpat2539@gmail.com',
          pass: '1103702037541'
      }
  });

  const mailOptions = {
    from: from + " <" + from_email + ">", // sender address
    to: 'nutpat2539@gmail.com', // list of receivers
    subject: 'New message from ' + from, // Subject line
    html: message// plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  });
})

app.listen(process.env.PORT || 8081)

