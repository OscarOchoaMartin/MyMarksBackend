import sequelize from '../sequelize';
var {subjects} = sequelize.models;

function getAllSubjects({params}, res){
    subjects.findAll({where: {userId: params.userId}})
        .then(subjects => {
            res.status(200).json(subjects);
        })
        .catch(err =>{
            res.status(400).send(err);
        })
}

function createSubject({params, body}, res){    
    var instance = subjects.build({
        name: body.name,
        enrollTime: body.enrollTime,
        userId: params.userId
    });

    instance.save()
        .then(newSubject => {
            res.status(200).json(newSubject);
        })
        .catch(err =>{
            res.status(400).send(err);
        })
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
    subjects.findById(params.subjectId)
        .then(subject=>{
            if(body.name)
                subject.name = body.name;
            if(body.enrollTime)
                subject.enrollTime = body.enrollTime;
            subject.save()
                .then(updated=>{
                    res.status(200).json(updated);
                })
        })
        .catch(error => {
            res.status(400).send(error);
        })
}

function deleteSubject({params}, res){
    subjects.findById(params.subjectId)
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