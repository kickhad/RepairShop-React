const moment = require('moment');

/**
 * Device database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
module.exports = function(sequelize, DataTypes) {
  const device = sequelize.define(
    'device',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      printerBrand: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          len: [2, 255],
          notEmpty: true,
        }
      },
      model: {
        type: DataTypes.TEXT,
        validate: {

        }
      },
      serial: {
        type: DataTypes.TEXT,
      },
      orignalOrderNo: {
        type: DataTypes.TEXT,
      },
      purchaseDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          return this.getDataValue('purchaseDate')
            ? moment
                .utc(this.getDataValue('purchaseDate'))
                .format('YYYY-MM-DD')
            : null;
        },
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

  device.associate = (models) => {




    models.device.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.device.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return device;
};
