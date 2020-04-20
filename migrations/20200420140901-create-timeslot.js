"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("timeslots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      weekday: {
        type: Sequelize.STRING,
      },
      startTime: {
        type: Sequelize.DECIMAL,
      },
      endTime: {
        type: Sequelize.DECIMAL,
      },
      gymId: {
        type: Sequelize.INTEGER,
      },
      maxCap: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("timeslots");
  },
};
