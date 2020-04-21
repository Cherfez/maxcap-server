"use strict";
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define(
    "booking",
    {
      userId: DataTypes.INTEGER,
      namePartner: DataTypes.STRING,
      timeslotId: DataTypes.INTEGER,
      gymId: DataTypes.INTEGER,
    },
    {}
  );
  booking.associate = function (models) {
    booking.belongsTo(models.user);
    booking.belongsTo(models.timeslot);
    booking.belongsTo(models.gym);
  };
  return booking;
};
