import sequelize from '../sequelize';
var {subjects, user_subject} = sequelize.models;

function getAllSubjects({params}, res){
    subjects.find({
        where: {userId: params.userId}
    }).then(subjects => {
        res.status(200).json(subjects);
    });
}

function createSubject({params, body}, res){    
    var instance = subjects.build({
        name: body.name,
        enrollTime: body.enrollTime,
        userId: body.userId
    });

    instance.save().then(newSubject => {
        res.status(200).json(newSubject);
    });
}

function getSubject({params}, res){
    subjects.findById(params.subjectId)
        .then(subject=>{
            res.status(200).json(subject);
        })
        .catch(error => {
            res.status(400).send(error);
        })
}

function updateSubject({params, body}, res){
    subject.findById(params.subjectId)
        .then(subject=>{
            subject.enrollTime = body.enrollTime;
            subject.save(updated=>{
                res.status(200).json(updated);
            })
        })
        .catch(error => {
            res.status(400).send(error);
        })
}

function deleteSubject({params}, res){
    subject.findById(params.subjectId)
        .then(subject=>{
            subject.destroy().then(()=>{
                res.status(200).json({status: "success", message: "subject succesfully deleted"});
            });
        })
        .catch(error => {
            res.status(400).send(error);
        })
}

export default {
    getAllSubjects,
    createSubject,
    getSubject,
    updateSubject,
    deleteSubject
}