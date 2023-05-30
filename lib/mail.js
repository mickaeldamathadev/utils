import mailer from 'nodemailer';
let transporter;
export default class Mail {
    static initTransporter(props) {
        transporter = mailer.createTransport({
            service: props.service,
            auth: {
                user: props.auth.user,
                pass: props.auth.pass,
            },
        });
    }
    static async mail(props) {
        try {
            if (!transporter) {
                throw new Error('Transporter not initialized');
            }
            const mailOptions = {
                from: props.sender,
                to: props.receiver,
                subject: props.subject,
                text: props.body,
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err)
                    throw new Error(err.message);
                else
                    return true;
            });
        }
        catch (error) {
            return error;
        }
    }
}
//# sourceMappingURL=mail.js.map