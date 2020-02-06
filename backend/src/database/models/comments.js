const moment = require('moment');

/**
 * Comments database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const comments = sequelize.define(
    'comments',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      comment: {
        type: DataTypes.TEXT,
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    },
  );

  comments.associate = (models) => {
    models.comments.belongsToMany(models.images, {
      as: 'images',
      constraints: false,
      through: 'commentsImagesImages',
    });



    models.comments.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.comments.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return comments;
};
