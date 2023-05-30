import twilio, { Twilio } from 'twilio';

// Declare variables to store the Twilio provider and sender information
let provider: Twilio;
let sender: string;

// Export the Sms class as the default export
export default class Sms {
  // Static method to initialize the Twilio provider
  static init(props: { accountSid: string; authToken: string; sender: string }) {
    // Initialize the provider using the Twilio constructor and provided accountSid and authToken
    provider = twilio(props.accountSid, props.authToken);
    // Store the sender number in the sender variable
    sender = props.sender;
  }

  // Static method to send an SMS message
  static async send(body: string, to: string) {
    try {
      // Check if the provider or sender is not initialized
      if (!provider || !sender) {
        throw new Error('SMS provider not initialized');
      }
      // Use the provider to send an SMS message
      return await provider.messages.create({
        body,
        from: sender,
        to,
      });
    } catch (error) {
      // Throw any errors that occur during the sending process
      throw error;
    }
  }
}
