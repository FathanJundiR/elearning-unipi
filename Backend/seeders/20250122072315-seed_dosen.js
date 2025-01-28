"use strict";
const { hash } = require("../helpers/bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const dosens = require("../data/dosen.json");
    dosens.forEach((dosen) => {
      dosen.password = hash(dosen.password);
      dosen.createdAt = dosen.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Dosens", dosens, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dosens", null, {});
  },
};
