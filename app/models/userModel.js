export default (sequelize, type) => {
    return sequelize.define ('users', {
        id: {
            type: type.STRING,
            primaryKey: true
        },
        email: type.STRING,
    });
}
