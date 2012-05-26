module.exports = function(sequelize, DataTypes){
	return sequelize.define('tags', {
		body: {
			type: DataTypes.STRING,
			validate: {
				len: [1, 20]
			}
		},
		createdBy: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			validate: {
				isInt: true
			}
		},
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: null
		}
	});
};