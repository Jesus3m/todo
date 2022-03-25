'use strict';

import { QueryInterface } from "sequelize/types";

module.exports = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('users', [{
      id: "1",
      name: 'John',
      lastName: 'Doe',
      email: "admin@admin.com",
      password: "$2b$10$fXxq0LtuXYpIfZpz41hKGelooeynQWhGYi8dZeJg4uU3yVkl3iwAq", //1234
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down (queryInterface: QueryInterface) {

    await queryInterface.bulkDelete('People', {}, {});

  }
};
