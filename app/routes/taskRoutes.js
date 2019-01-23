'use strict';
import taskController from '../controllers/taskController';

function init(app){
    app.route('/tasks')
        .get(taskController.getAllTasks)
        .post(taskController.createTask);

    app.route('/task/:idTask')
        .get(taskController.getTask)
        .put(taskController.updateTask)
        .delete(taaskController.deleteTask);

    app.route('/task/:idTask/subtask')
        .get(taskController.getAllSubtasks)
        .post(taskController.createSubTask);

    app.route('/subtask/:idSubtask')
        .put(taskController.updateSubtask)
        .delete(taskController.deleteSubtask);
}

export default init;