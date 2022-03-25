'use strict';

import { QueryInterface } from "sequelize/types";
import  Sequelize from "sequelize";

export = {
  async up (queryInterface: QueryInterface) {
    await queryInterface.addColumn('users', 'createdAt', Sequelize.DATE)
    await queryInterface.addColumn('users', 'updatedAt', Sequelize.DATE)
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.removeColumn('users', 'createdAt')
    await queryInterface.removeColumn('users', 'updatedAt')
  }
};
