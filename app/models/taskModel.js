export default (sequelize, type) => {
    return sequelize.define ('tasks', {
        percentage: type.FLOAT,
        mark: type.FLOAT,
        subjectId: type.INTEGER,
        parentTask: { type: type.INTEGER, defaultValue: null }
    });
}