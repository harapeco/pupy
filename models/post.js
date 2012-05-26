module.exports = function(sequelize, DataTypes){
	return sequelize.define('posts', {
		body: {
			type: DataTypes.STRING,
			validate: {
				len: [1, 100]
			}
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: {
				isInt: true
			}
		},
		tagId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			validate: {
				isInt: true
			}
		},
		likeNum: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
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