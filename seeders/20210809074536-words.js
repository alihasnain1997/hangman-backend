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

     await queryInterface.bulkInsert('words', [{
      word: 'apple',
    },
    {
      word: 'banana',
    },
    {
      word: 'mouse',
    },
    {
      word: 'bottle',
    },
    {
      word: 'luggage',
    },
    {
      word: 'vehicle',
    },
    {
      word: 'painting',
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
