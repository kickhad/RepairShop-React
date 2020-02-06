const moment = require('moment');

/**
 * RepairOrder database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const repairOrder = sequelize.define(
    'repairOrder',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      delivered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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

  repairOrder.associate = (models) => {
    models.repairOrder.belongsTo(models.customer, {
      as: 'customer',
      constraints: false,
    });

    models.repairOrder.belongsToMany(models.device, {
      as: 'products',
      constraints: false,
      through: 'repairOrderProductsDevice',
    });

    models.repairOrder.belongsTo(models.user, {
      as: 'assignedTech',
      constraints: false,
    });

    models.repairOrder.belongsToMany(models.comments, {
      as: 'comments',
      constraints: false,
      through: 'repairOrderCommentsComments',
    });

    models.repairOrder.belongsToMany(models.claims, {
      as: 'warrantyClaim',
      constraints: false,
      through: 'repairOrderWarrantyClaimClaims',
    });

    models.repairOrder.hasMany(models.file, {
      as: 'attachments',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.repairOrder.getTableName(),
        belongsToColumn: 'attachments',
      },
    });

    models.repairOrder.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.repairOrder.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return repairOrder;
};
