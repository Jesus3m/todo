'use strict';

import { QueryInterface } from "sequelize/types";
import  Sequelize from "sequelize";

export = {
  async up (queryInterface: QueryInterface) {
     await queryInterface.createTable('todos', {
        id: {
          primaryKey: true,
          type: Sequelize.STRING
        },
        userId: {
          type: Sequelize.STRING,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        description: Sequelize.STRING,
        status: Sequelize.STRING,
        completeAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
       }, {
         engine: 'InnoDB'
       });
  },

  async down (queryInterface: QueryInterface) {
      await queryInterface.dropTable('todos');
  }
};
