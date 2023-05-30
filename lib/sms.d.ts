export default class Sms {
    static init(props: {
        accountSid: string;
        authToken: string;
        sender: string;
    }): void;
    static send(body: string, to: string): Promise<import("twilio/lib/rest/api/v2010/account/message").MessageInstance>;
}
