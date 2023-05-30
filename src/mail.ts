import mailer, { SentMessageInfo, Transporter } from 'nodemailer';

let transporter: Transporter;

interface ITransporter {
  service: string;
  auth: {
    user: string;
    pass: string;
  };
}

export default class Mail {
  static initTransporter(props: ITransporter) {
    transporter = mailer.createTransport({
      service: props.service,
      auth: {
        user: props.auth.user,
        pass: props.auth.pass,
      },
    });
  }

  static async mail(props: { sender: string; receiver: string; subject: string; body: string }) {
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

      transporter.sendMail(mailOptions, function (err: Error | null, info: SentMessageInfo) {
        if (err) throw new Error(err.message);
        else return true;
      });
    } catch (error) {
      return error;
    }
  }
}
