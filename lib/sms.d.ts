/**

    Interface representing the Twilio configuration.
    @interface ITwilio
    @property {string} accountSid - The Twilio account SID.
    @property {string} authToken - The Twilio authentication token.
    @property {string} sender - The phone number or alphanumeric sender ID.

    */
interface ITwilio {
    accountSid: string;
    authToken: string;
    sender: string;
}
/**

    Interface representing an SMS message.
    @interface ISMS
    @property {ITwilio} twilio - The Twilio configuration.
    @property {string} dest - The destination phone number.
    @property {string} msg - The message content.
    */
interface ISMS {
    twilio: ITwilio;
    dest: string;
    msg: string;
}
/**

    Sends an SMS message using the Twilio API.
    @async
    @param {ISMS} props - The SMS properties.

    Interface representing an SMS message.
    @interface ISMS
    @property {ITwilio} twilio - The Twilio configuration.
    @property {string} dest - The destination phone number.
    @property {string} msg - The message content.

    Interface representing the Twilio configuration.
    @interface ITwilio
    @property {string} accountSid - The Twilio account SID.
    @property {string} authToken - The Twilio authentication token.
    @property {string} sender - The phone number or alphanumeric sender ID.


    @returns {Promise<object|Error>} - A promise that resolves to the created SMS message object or an error.
    */
export default function sms(props: ISMS): Promise<object | unknown>;
export {};
