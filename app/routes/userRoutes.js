'use strict';
import userController from '../controllers/userController';

function init(app){

    app.route('/users')
        .post(userController.register)
}

export default init;