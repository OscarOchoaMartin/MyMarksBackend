import sequelize from '../sequelize';
var {users} = sequelize.models;

function register({body}, res){
    var instance = users.build({
        id: body.token,
        email: body.email
    });
    instance.save()
        .then(user=>{
            res.status(200).json(user);
        })
        .catch(err =>{
            res.status(500).send(err);
        })
}

function getUser({params}, res){
    users.find({where: {id: params.tokenId}})
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err =>{
            res.status(400).send(err);
        })
}

export default {
    register,
    getUser
}