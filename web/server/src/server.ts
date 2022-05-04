import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

const app = express()

app.use(express.json())


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "aa7e2f9d46f635",
        pass: "0756254bf4ac8f"
    }
});




app.post('/feedbacks', async (req, res) => {
    const { type, comment, screeshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screeshot
        }
    })

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Jadson Silva <jmdesenvolvimento@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Tipo do feddback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
            `</div>`
        ].join('\n')
    });


    return res.status(201).json({ data: feedback });
})











app.listen(3333, () => {
    console.log('HTTP server running!')
});