export default (sequelize, type) => {
    return sequelize.define ('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: type.STRING,
    });
}