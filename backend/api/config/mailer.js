const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

let transporter = nodemailer.createTransport({
  service: "outlook",
  secure: false,
  auth: {
    user: process.env.OUTLOOK_EMAIL,
    pass: process.env.OUTLOOK_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: "views/patials",
    layoutsDir: "views/layouts",
    defaultLayout: "",
  },
  viewPath: "views/templates",
  extName: ".handlebars",
};
transporter.use("compile", hbs(handlebarOptions));

exports.welcomeMail = (email, name) =>
  transporter.sendMail({
    from: "Vue Mailer",
    to: email,
    subject: "Account Creation",
    template: "welcome",
    context: {
      user: name,
    },
  });
