const { Router } = require("express");
const auth = require("../auth/middleware");
const Bookings = require("../models").booking;
const Gym = require("../models").gym;
const Timeslot = require("../models").timeslot;

const router = new Router();

router.get("/", auth, async (req, res, next) => {
  console.log("hi", req.dataValue);
  try {
    if (req.user.id === null) {
      return res.status(400).send({ message: "Not logged in!" });
    }
    const bookings = await Bookings.findAll({
      where: { userId: req.user.id },
      include: [
        {
          model: Gym,
          as: "Instruments",
          attributes: ["name"],
        },
        {
          model: Timeslot,
          attributes: ["weekday", "startTime", "endTime"],
        },
      ],
    });
    console.log("bookings", bookings);
    if (bookings === null) {
      return res.status(400).send({ message: "Bookings does not exist!" });
    }
    res.status(200).send(bookings);
  } catch (e) {
    next(e);
  }
});

// router.get("/all", async (req, res, next) => {
//   try {
//     const bookings = await Bookings.findAll();
//     // console.log("bookings", bookings);
//     res.status(200).send(bookings);
//   } catch (e) {
//     next(e);
//   }
// });

router.post("/", auth, async (req, res, next) => {
  try {
    if (req.user.id === null) {
      return res.status(400).send({ message: "Not logged in!" });
    }
    const { namePartner, timeslotId, gymId } = req.body;
    // console.log("namePartner", namePartner);

    const booking = await Bookings.create({
      userId: req.user.id,
      namePartner,
      timeslotId,
      gymId,
    });
    // console.log("booking", booking.dataValues.timeslotId);
    const timeslots = await Bookings.findAll({
      where: { timeslotId: booking.dataValues.timeslotId },
    });
    // console.log("timeslots", timeslots[0].dataValues.timeslotId);
    const totalClimbers = timeslots.map((total) => {
      return total.dataValues.namePartner.split("[ ]").pop();
    });
    console.log("totalClimbers", totalClimbers);
    const maxCap = await Timeslot.findByPk(timeslots[0].dataValues.timeslotId);
    // console.log("max", maxCap.dataValues.maxCap);
    if (timeslots.length > maxCap.dataValues.maxCap) {
      return res.status(418).send({ message: "MaxCap reached" });
    }

    return res.status(201).send({ message: "Booking added", booking });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
