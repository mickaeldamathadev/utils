import { ProviderToken } from 'node-apn';
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
    static init(props: {
        token: ProviderToken;
        production: boolean;
    }): void;
    /**
          Sends a push notification to a device.
          @param {Object} props - The push notification properties.
          @param {string} props.token - The device token.
          @param {string} [props.alert] - The alert message (optional).
          @param {string} [props.sound] - The sound name (optional).
          @returns {Promise<object|Error>} - A promise that resolves to the result of the notification sending or an error.
          */
    static push(props: {
        token: string;
        alert?: string;
        sound?: string;
    }): Promise<object | any>;
}
