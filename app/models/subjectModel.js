export default (sequelize, type) => {
    return sequelize.define ('subjects', {
        name: {
            type: type.STRING,
            primaryKey: true
        },
        enrollTime: type.INTEGER
    });
}