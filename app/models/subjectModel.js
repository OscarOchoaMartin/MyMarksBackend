export default (sequelize, type) => {
    return sequelize.define ('subjects', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        enrollTime: type.INTEGER,
        userId: type.INTEGER
    });
}