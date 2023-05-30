import apn from 'node-apn';
let provider;
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
    static init(props) {
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
    static async push(props) {
        try {
            const notification = new apn.Notification();
            notification.alert = props.alert || 'Hello, World!';
            notification.sound = props.sound || 'default';
            const deviceToken = props.token;
            return await provider.send(notification, deviceToken);
        }
        catch (error) {
            return error;
        }
    }
}
//# sourceMappingURL=apns.js.map