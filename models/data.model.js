module.exports = (sequelize, Sequelize) => {
	const DataTest = sequelize.define('dataTest', {
		name: {
			type: Sequelize.STRING
		},
		post: {
			type: Sequelize.STRING
		}
	});

	return DataTest;
};
