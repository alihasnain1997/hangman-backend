'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      username: 'John Doe',
      password: 'abcd'
    },
    {
      username: 'John wick',
      password: 'abcd'
    },
    {
      username: 'John snow',
      password: 'abcd'
    },
    {
      username: 'John Doe',
      password: 'abcd'
    },
    {
      username: 'will smith',
      password: 'abcd'
    },
    {
      username: 'clark kent',
      password: 'abcd'
    },
    {
      username: 'big boy',
      password: 'abcd'
    }], {});
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
