export interface SendMaildata {
    subject: string,
    body: string
}

export interface MailAdapter {
    sendMail: (data: SendMaildata) => Promise<void>;
}