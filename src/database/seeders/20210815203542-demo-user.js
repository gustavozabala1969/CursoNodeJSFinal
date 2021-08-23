'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert(
      'Users', [
        { firstName: "Gustavo",
          lastName: "Zabala",
          username:"gustavozabala",
          email: "gustavozabala@arba.gov.ar",
          password: bcrypt.hashSync('123456',8),
          telefono:011111111,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { firstName: "Oscar",
          lastName: "Zabala",
          username:"oscarzabala",
          email: "oscarabala@arba.gov.ar",
          password: bcrypt.hashSync('123456',8),
          telefono:011111431,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], 
    {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
