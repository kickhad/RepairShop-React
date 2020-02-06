const moment = require('moment');

/**
 * Images database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const images = sequelize.define(
    'images',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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

  images.associate = (models) => {


    models.images.hasMany(models.file, {
      as: 'image',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.images.getTableName(),
        belongsToColumn: 'image',
      },
    });

    models.images.hasMany(models.file, {
      as: 'thumbnail',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.images.getTableName(),
        belongsToColumn: 'thumbnail',
      },
    });

    models.images.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.images.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return images;
};
