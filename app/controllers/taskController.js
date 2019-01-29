import sequelize from '../sequelize';
import { resolve } from 'path';
var {tasks} = sequelize.models;

function getAllTasks({params}, res){
    tasks.findAll({
        where: {subjectId: params.subjectId}
    }).then(result => {
        res.status(200).json(result);
    })
}

function createTask({params, body}, res){
    if(!body.mark)
        body.mark = 0;
    
    var instance = tasks.build({
        name: body.name,
        percentage: body.percentage,
        mark: body.mark,
        subjectId: params.subjectId,
    });
    
    instance.save().then(task=>{
        res.status(200).json(task);
    })
}

function getTask({params, body}, res){
    tasks.find({
        where:{id: params.idTask}
    }).then(result=>{
        res.status(200).json(result);
    })
}

function updateTask({params, body}, res){
    tasks.find({
        where:{id: params.idTask}
    }).then(result=>{
        if(body.percentage)
            result.percentage = body.percentage;
        if(body.mark)
            result.mark = body.mark;
        if(body.name)
            result.name = body.name;
        result.save().then(modifTask=>{
            if(modifTask.parentTask){
                updateParents(modifTask.parentTask).then(()=>{
                    res.status(200).json(modifTask);
                });
            }
            else {
                res.status(200).json(modifTask);
            }
        })
    })
}

function deleteTask({params, body}, res){
    tasks.find({
        where: {id: params.idTask}
    }).then(task=>{
        let parentId = task.parentTask;
        task.destroy().then(()=>{
            if(parentId){
                updateParents(parentId).then(()=>{
                    res.status(200).json({status: "success", message: "task succesfully deleted"});
                });
            }
            else {
                res.status(200).json({status: "success", message: "task succesfully deleted"});
            }
        })
    })
}

function getAllSubtasks({params}, res){
    tasks.findAll({where: {parentTask: params.idTask}})
        .then(subtasks=>{
            res.status(200).json(subtasks);
        })
        .catch(err =>{
            res.status(400).send(err);
        })
}

function createSubtask({params, body}, res){
    var instance = tasks.build({
        name: body.name,
        percentage: body.percentage,
        mark: body.mark,
        parentTask: params.idTask
    });
    
    instance.save()
        .then(task=>{
            if(body.mark){
                updateParents(params.idTask)
                    .then(()=>{
                        res.status(200).json(task);
                    })
                    .catch(err =>{
                        res.status(400).send(err);
                    })
            }
            else {
                res.status(200).json(task);
            }
        })
        .catch(err =>{
            res.status(400).send(err);
        })
}

function updateParents(parentId){
    return new Promise(function(resolve, reject){
        tasks.find({where: {id: parentId}}).then(parentTask=>{
            tasks.findAll({where: {parentTask: parentId}})
                .then(subtasks=>{
                    parentTask.mark = 0;
                    subtasks.forEach((subtask)=>{
                        parentTask.mark += subtask.mark * subtask.percentage / 100;
                    });
                    parentTask.save();
                    if(parentTask.parentTask){
                        updateParents(parentTask.parentTask)
                            .then(()=>{
                                resolve();
                            })
                            .catch(err =>{
                                reject(err);
                            })
                    }
                    else{
                        resolve();
                    }
                })
                .catch(err =>{
                    res.status(400).send(err);
                })
        });
    });
}

export default {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    getAllSubtasks,
    createSubtask    
}
