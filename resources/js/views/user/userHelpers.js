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
