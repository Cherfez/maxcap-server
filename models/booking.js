"use strict";
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define(
    "booking",
    {
      userId: DataTypes.INTEGER,
      namePartner: {
        type: DataTypes.STRING,
        get: function () {
          return JSON.parse(this.getDataValue("namePartner"));
        },
        set: function (val) {
          return this.setDataValue("namePartner", JSON.stringify(val));
        },
      },
      timeslotId: DataTypes.INTEGER,
      gymId: DataTypes.INTEGER,
      pickedDate: DataTypes.STRING,
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
