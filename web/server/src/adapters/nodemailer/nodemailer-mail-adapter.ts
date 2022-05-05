import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "8314da0bd8237f",
    pass: "5fc2a96a9ae561"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: "Equipe Fidget <testing@fidget.com>",
            to: "Eduardo Ibarr <eduardoibarr56@gmail.com>",
            subject: subject,
            html: body
        })
    };
}