'use strict';
import subjectController from '../controllers/subjectController';

function init(app){

    app.route('/subjects')
        .get(subjectController.getAllSubjects)
        .post(subjectController.createASubject)

    app.route('/subject/:idSubject')
        .get(subjectController.getSubject)
        .put(subjectController.updateSubject)
        .delete(subjectController.deleteSubject)
}

export default init;