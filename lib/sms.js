import twilio from 'twilio';
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
export default async function sms(props) {
    try {
        return await twilio(props.twilio.accountSid, props.twilio.authToken).messages.create({
            body: props.msg,
            from: props.twilio.sender,
            to: props.dest,
        });
    }
    catch (error) {
        return error;
    }
}
//# sourceMappingURL=sms.js.map