import userModel from './userModel';
import subjectModel from './subjectModel';
import taskModel from './taskModel';
import relationUserSubject from './relationUserSubjectModel';


function init (sequelize, Sequelize) {
    userModel(sequelize, Sequelize);
    subjectModel(sequelize, Sequelize);
    taskModel(sequelize, Sequelize);
    relationUserSubject(sequelize, Sequelize);
    addFK(sequelize);
}

function addFK(sequelize){
   var {subjects, tasks, users, user_subject} = sequelize.models;

    subjects.hasOne(tasks, {foreignKey: 'subjectId', targetKey: 'id'});

    users.belongsToMany(subjects, {through: user_subject});
    subjects.belongsToMany(users, {through: user_subject});

    tasks.hasMany(tasks, { as: 'SubTasks', foreignKey: 'parentTask', useJunctionTable: false });
}

export default init;