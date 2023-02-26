/**
 *
 * @returns {Promise<unknown>}
 */
export function getProducts() {
    return new Promise((resolve, reject) => {
        axios.get(api_routes.user.products()).then((response) => {
            return response;
        }).then(json => {
            resolve(json);
        }).catch(error => {
            reject(error)
        });
    });
}

/**
 *
 * @param id
 * @param data
 * @returns {Promise<unknown>}
 */
export function reviewProduct(id, data) {
    return new Promise((resolve, reject) => {
        axios.post(api_routes.user.rateProduct(id), data).then(response => {
            return response;
        }).then(json => {
            resolve(json);
        }).catch(error => {
            reject(error)
        });
    })
}

/**
 *
 * @returns {Promise<unknown>}
 */
export function getProduct(id) {
    return new Promise((resolve, reject) => {
        axios.get(api_routes.user.product(id)).then((response) => {
            return response;
        }).then(json => {
            resolve(json);
        }).catch(error => {
            reject(error)
        });
    });
}

