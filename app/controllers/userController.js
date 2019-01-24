import sequelize from '../sequelize';
var {users} = sequelize.models;

function register({body}, res){
    var instance = users.build({
        id: body.token,
        email: body.email
    });
    instance.save().then(user=>{
        res.status(200).json(user);
    })
}

export default {
    register
}