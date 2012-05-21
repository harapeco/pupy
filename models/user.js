module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		name: {
			type: DataTypes.STRING,
			validate: {
				len: [1, 20]
			}
		},
		email: {
			type: DataTypes.STRING,
			validate: {
				len: [1, 100]
			}
		},
		postNum: {
			type: DataTypes.INTEGER,
			validate: {
				isInt: true
			}
		},
		likeNum: {
			type: DataTypes.INTEGER,
			validate: {
				isInt: true
			}
		},
		bookmarkNum: {
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