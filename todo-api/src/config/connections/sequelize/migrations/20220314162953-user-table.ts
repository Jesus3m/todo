'use strict';

import { QueryInterface } from "sequelize/types";
import  Sequelize from "sequelize";

export = {
  async up (queryInterface: QueryInterface) {
     await queryInterface.createTable('users', {
        id: {
          primaryKey: true,
          type: Sequelize.STRING
        },
        name: Sequelize.STRING,
        lastName: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        deletedAt: Sequelize.DATE
       }, {
         engine: 'InnoDB'
       });
  },

  async down (queryInterface: QueryInterface) {
      await queryInterface.dropTable('users');
  }
};
