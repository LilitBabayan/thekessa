import {NotificationManager} from "react-notifications";

/**
 *
 * @param x
 * @returns {string}
 */
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 *
 * @param text
 * @returns {*}
 */
export function stringToArray(text) {
    return text.split(",")
}

/**
 *
 * @param type
 * @param msg
 */
export function createNotification(type, msg) {
    switch (type) {
        case 'info':
            NotificationManager.info(msg);
            break;
        case 'success':
            NotificationManager.success(msg);
            break;
        case 'warning':
            NotificationManager.warning(msg);
            break;
        case 'error':
            NotificationManager.error(msg);
            break;
    }

}

