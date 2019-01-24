'use strict';
import taskController from '../controllers/taskController';

function init(app){
    app.route('/tasks')
        .get(taskController.getAllTasks)
        .post(taskController.createTask);

    app.route('/task/:idTask')
        .get(taskController.getTask)
        .put(taskController.updateTask)
        .delete(taskController.deleteTask);

    app.route('/task/:idTask/subtask')
        .get(taskController.getAllSubtasks)
        .post(taskController.createSubtask);

}

export default init;