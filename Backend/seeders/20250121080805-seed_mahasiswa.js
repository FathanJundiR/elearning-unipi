"use strict";
const { hash } = require("../helpers/bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const mahasiswas = require("../data/mahasiswa.json");
    mahasiswas.forEach((mahasiswa) => {
      mahasiswa.password = hash(mahasiswa.password);
      mahasiswa.createdAt = mahasiswa.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Mahasiswas", mahasiswas, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Mahasiswas", null, {});
  },
};
