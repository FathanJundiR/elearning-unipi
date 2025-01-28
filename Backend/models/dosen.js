"use strict";
const { Model } = require("sequelize");
const { hash } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class Dosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dosen.init(
    {
      nik: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: {
            msg: "NIK Diperlukan",
          },
          notEmpty: {
            msg: "NIK Diperlukan",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password Diperlukan",
          },
          notEmpty: {
            msg: "Password Diperlukan",
          },
          len: {
            args: [5],
            msg: "Password Diperlukan",
          },
        },
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Nama Diperlukan",
          },
          notEmpty: {
            msg: "Nama Diperlukan",
          },
        },
      },
      alamat: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Alamat Diperlukan",
          },
          notEmpty: {
            msg: "Alamat Diperlukan",
          },
        },
      },
      status: {
        type: DataTypes.ENUM("Aktif", "Cuti", "Keluar", "Dikeluarkan"),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Status Diperlukan",
          },
          notEmpty: {
            msg: "Status Diperlukan",
          },
        },
      },
      role: {
        type: DataTypes.ENUM("Dosen", "Admin"),
        allowNull: false,
        validate: {
          notNull: {
            msg: "Role Diperlukan",
          },
          notEmpty: {
            msg: "Role Diperlukan",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Dosen",
    }
  );

  Dosen.beforeCreate((instance, option) => {
    instance.password = hash(instance.password);
  });

  return Dosen;
};
