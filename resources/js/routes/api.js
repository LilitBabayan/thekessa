let root = '/api';

module.exports = {
    root: root,

    user: {
        user() {
            return root + '/user';
        },

        products() {
            return root + '/products';
        },

        product(id) {
            return root + '/product/' + id;
        },
        register() {
            return '/register';
        },

        login() {
            return '/login';
        },

        csrf() {
            return '/sanctum/csrf-cookie';
        },

        logout() {
            return '/logout';
        },

        forgotPassword() {
            return '/password/email';
        },

        updatePassword() {
            return '/password/reset';
        },

        makePayment() {
            return root + '/order';
        },

        rateProduct(id) {
            return root + '/product/' + id + '/rate';
        },

        users() {
            return root + '/admin/users';

        }
    }
}
