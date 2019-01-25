export default (sequelize, type) => {
    return sequelize.define ('tasks', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        percentage: type.FLOAT,
        name: { type: type.STRING, defaultValue: null },
        mark: { type: type.FLOAT, defaultValue: 0 },
        subjectId: { type: type.INTEGER, defaultValue: null },
        parentTask: { type: type.INTEGER, defaultValue: null }
    });
}
