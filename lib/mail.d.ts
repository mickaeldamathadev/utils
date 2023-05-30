interface ITransporter {
    service: string;
    auth: {
        user: string;
        pass: string;
    };
}
export default class Mail {
    static initTransporter(props: ITransporter): void;
    static mail(props: {
        sender: string;
        receiver: string;
        subject: string;
        body: string;
    }): Promise<unknown>;
}
export {};
