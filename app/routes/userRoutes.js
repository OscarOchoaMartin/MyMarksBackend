'use strict';
import userController from '../controllers/userController';

function init(app){

    app.route('/users')
        .post(userController.register);

    app.route('/user/:tokenId')
        .get(userController.getUser);
}

export default init;