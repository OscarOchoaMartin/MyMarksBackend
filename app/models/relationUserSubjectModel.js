export default (sequelize, type) => {
	return sequelize.define ('user_subject', {
		subjectId: {
			type: type.STRING,
			primaryKey: true,
        },
        userId: {
            type: type.INTEGER,
			primaryKey: true,
        }
	});
}