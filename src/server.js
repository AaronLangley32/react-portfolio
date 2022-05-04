const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv')

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: env.MAIL_NAME,
      pass: env.MAIL_PASS,
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
      console.log(env.MAIL_NAME)
    } else {
      console.log("Ready to Send");
    }
  });