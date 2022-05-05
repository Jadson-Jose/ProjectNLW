import express from 'express';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository';
import { NodeMailerAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router()




routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screeshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const NodemailMailerAdapter = new NodeMailerAdapter()



    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        NodemailMailerAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screeshot
    })







    return res.status(201).send();
})
