import userModel from './userModel';
import subjectModel from './subjectModel';
import taskModel from './taskModel';


function init (sequelize, Sequelize) {
    userModel(sequelize, Sequelize);
    subjectModel(sequelize, Sequelize);
    taskModel(sequelize, Sequelize);
    addFK(sequelize);
}

function addFK(sequelize){
   var {subjects, tasks, users} = sequelize.models;

    subjects.hasOne(tasks, {foreignKey: 'subjectId', targetKey: 'id'});
    users.hasOne(subjects, {foreignKey: 'userId', targetKey: 'id'});

    tasks.hasMany(tasks, { as: 'SubTasks', foreignKey: 'parentTask', useJunctionTable: false });
}

export default init;