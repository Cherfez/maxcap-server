"use strict";
module.exports = (sequelize, DataTypes) => {
  const gym = sequelize.define(
    "gym",
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      openHrs: DataTypes.DECIMAL,
      closeHrs: DataTypes.DECIMAL,
    },
    {}
  );
  gym.associate = function (models) {
    gym.hasMany(models.timeslot);
    gym.hasMany(models.booking);
  };
  return gym;
};
