"use strict";
module.exports = (sequelize, DataTypes) => {
  const timeslot = sequelize.define(
    "timeslot",
    {
      weekday: DataTypes.STRING,
      startTime: DataTypes.DECIMAL,
      endTime: DataTypes.DECIMAL,
      gymId: DataTypes.INTEGER,
      maxCap: DataTypes.INTEGER,
    },
    {}
  );
  timeslot.associate = function (models) {
    timeslot.belongsTo(models.gym);
  };
  return timeslot;
};
