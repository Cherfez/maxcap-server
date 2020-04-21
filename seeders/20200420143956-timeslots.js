"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const timeslots = [
      {
        weekday: "Monday",
        startTime: 10.0,
        endTime: 12.0,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Monday",
        startTime: 12.3,
        endTime: 14.3,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Monday",
        startTime: 15.0,
        endTime: 17.0,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Monday",
        startTime: 17.3,
        endTime: 19.3,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Monday",
        startTime: 20.0,
        endTime: 22.0,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert("timeslots", timeslots, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("timeslots", null, {});
  },
};
