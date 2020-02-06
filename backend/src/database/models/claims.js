const moment = require('moment');

/**
 * Claims database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const claims = sequelize.define(
    'claims',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      manufacturer: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.ENUM,
        values: [
          "Open",
          "Submitted",
          "Denied",
          "Resolved"
        ],
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

  claims.associate = (models) => {




    models.claims.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.claims.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return claims;
};
