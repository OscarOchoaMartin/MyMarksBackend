'use strict';
import userController from '../controllers/userController';

function init(app){
    app.route('/users/login')
        .post(userController.login)

    app.route('/users/logout')
        .post(userController.logout)
}

export default init;