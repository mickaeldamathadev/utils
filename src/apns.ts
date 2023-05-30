import apn, { Notification, Provider, ProviderToken } from 'node-apn';

let provider: Provider;

/**

    A class for sending push notifications using APNS (Apple Push Notification Service).
*/

export default class Apns {
  /**
        Initializes the APNS provider.
        @param {Object} props - The provider configuration properties.
        @param {ProviderToken} props.token - The APNS token containing the key, keyId, and teamId.
        @param {boolean} props.production - Set to true for production environment.
        */
  static init(props: { token: ProviderToken; production: boolean }) {
    provider = new apn.Provider({
      token: props.token,
      production: props.production,
    });
  }

  /**
        Sends a push notification to a device.
        @param {Object} props - The push notification properties.
        @param {string} props.token - The device token.
        @param {string} [props.alert] - The alert message (optional).
        @param {string} [props.sound] - The sound name (optional).
        @returns {Promise<object|Error>} - A promise that resolves to the result of the notification sending or an error.
        */

  static async push(props: {
    token: string;
    alert?: string;
    sound?: string;
  }): Promise<object | any> {
    try {
      const notification: Notification = new apn.Notification();
      notification.alert = props.alert || 'Hello, World!';
      notification.sound = props.sound || 'default';

      const deviceToken: string = props.token;

      return await provider.send(notification, deviceToken);
    } catch (error) {
      return error;
    }
  }
}
