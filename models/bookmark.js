module.exports = function(sequelize, DataTypes) {
	return sequelize.define('bookmarks', {
		userId: {
			type: DataTypes.INTEGER,
			validate: {
				isInt: true
			}
		},
		tagId: {
			type: DataTypes.INTEGER,
			validate: {
				isInt: true
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