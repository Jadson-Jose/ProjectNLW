import nodemailer from 'nodemailer'
import { MailAdapter, SendMaildata } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "aa7e2f9d46f635",
        pass: "0756254bf4ac8f"
    }
});


export class NodeMailerAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMaildata){

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Jadson Silva <jmdesenvolvimento@gmail.com>',
        subject,
        html: body,
    });
    
  }
}