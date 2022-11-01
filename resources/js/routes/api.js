let root = '/api';

module.exports = {
    root: root,

    user: {
        products() {
            return root + '/products';
        },

        product(id) {
            return root + '/product/' + id;
        },
        register() {
            return root + '/auth/register';
        },

        login() {
            return root + '/auth/login';
        },

        csrf() {
            return root + '/sanctum/csrf-cookie';
        },
    }
}
