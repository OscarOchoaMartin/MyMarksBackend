'use strict';
import subjectController from '../controllers/subjectController';

function init(app){

    app.route('/subjects/:userId')
        .get(subjectController.getAllSubjects)
        .post(subjectController.createSubject)

    app.route('/subject/:subjectName')
        .get(subjectController.getSubject)
        .put(subjectController.updateSubject)
        .delete(subjectController.deleteSubject)
}

export default init;