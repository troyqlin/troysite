import nodemailer from "nodemailer";

function send_mail(from, email, message) {
  console.log("still working haha");
  console.log(from, email, message);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pokierock@gmail.com", // generated ethereal user
      pass: "byvacoybbzpplemy", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: from, // sender address
    to: "pokierock@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: message, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export { send_mail };
