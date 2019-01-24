export default (sequelize, type) => {
    return sequelize.define ('tasks', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        percentage: type.FLOAT,
        mark: { type: type.FLOAT, defaultValue: null },
        subjectId: { type: type.INTEGER, defaultValue: null },
        parentTask: { type: type.INTEGER, defaultValue: null }
    });
}