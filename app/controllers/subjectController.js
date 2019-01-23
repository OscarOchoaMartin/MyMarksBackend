import sequelize from '../sequelize';
var {subjects, user_subject} = sequelize.models;

function getAllSubjects({params}, res){
    subjects.find({
        include: [{
            model: user_subject,
            required: true,
            where: {userId: params.userId}
           }],
    }).then(subjects => {
        res.status(200).json(subjects);
    });
}

function createSubject({params, body}, res){

    subjects.findById(body.name)
        .then(exist =>{
            if(exist){
                var relation = user_subject.build ({
                    subjectId: exist.name,
                    userId: params.userId
                });
                relation.save().then(()=>{
                    res.status(200).json(newSubject);
                });
            }

            else {
                var instance = subjects.build({
                    name: body.name,
                    enrollTime: body.enrollTime
                });
        
                instance.save().then(newSubject => {
                    var relation = user_subject.build ({
                        subjectId: newSubject.name,
                        userId: params.userId
                    });
                    relation.save().then(()=>{
                        res.status(200).json(newSubject);
                    });
                });
            }
        })
        .catch(error => {
            res.status(400).send(error);
        });
}

function getSubject({params}, res){
    subjects.findById(params.subjectName)
        .then(subject=>{
            res.status(200).json(subject);
        })
        .catch(error => {
            res.status(400).send(error);
        })
}

function updateSubject({params, body}, res){
    subject.findById(params.subjectName)
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
    subject.findById(params.subjectName)
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