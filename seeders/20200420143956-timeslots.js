"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const timeslots = [
      {
        weekday: "Mon",
        startTime: 10.0,
        endTime: 12.0,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Mon",
        startTime: 12.3,
        endTime: 14.3,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Mon",
        startTime: 15.0,
        endTime: 17.0,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Mon",
        startTime: 17.3,
        endTime: 19.3,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Mon",
        startTime: 20.0,
        endTime: 22.0,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Tue",
        startTime: 10.0,
        endTime: 12.0,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Tue",
        startTime: 12.3,
        endTime: 14.3,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Tue",
        startTime: 15.0,
        endTime: 17.0,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Tue",
        startTime: 17.3,
        endTime: 19.3,
        gymId: 1,
        maxCap: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        weekday: "Tue",
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
