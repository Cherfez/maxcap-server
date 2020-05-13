const { Router } = require("express");
const auth = require("../auth/middleware");
const Bookings = require("../models").booking;
const Gym = require("../models").gym;
const Timeslot = require("../models").timeslot;

const router = new Router();

router.get("/:userId", async (req, res, next) => {
  // console.log("hi", req.dataValue);
  try {
    const { userId } = req.params;
    // console.log("id", userId);

    if (userId === null) {
      return res.status(400).send({ message: "Not logged in!" });
    }

    const bookings = await Bookings.findAll({
      where: { userId: userId },
      include: [
        {
          model: Gym,
          attributes: ["name"],
        },
        {
          model: Timeslot,
          attributes: ["weekday", "startTime", "endTime"],
        },
      ],
    });
    // console.log("bookings", bookings);

    if (bookings === null) {
      return res.status(400).send({ message: "Bookings does not exist!" });
    }

    res.status(200).send(bookings);
  } catch (e) {
    next(e);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    if (req.user.id === null) {
      return res.status(400).send({ message: "Not logged in!" });
    }
    const { namePartner, timeslotId, gymId, pickedDate } = req.body;
    // console.log("namePartner", namePartner);

    const booking = await Bookings.create({
      userId: req.user.id,
      namePartner,
      timeslotId,
      gymId,
      pickedDate,
    });
    // console.log("booking", booking.dataValues.timeslotId);
    const timeslots = await Bookings.findAll({
      where: { timeslotId: booking.dataValues.timeslotId },
    });
    // console.log("timeslots", timeslots[0].dataValues.timeslotId);
    const climbingPartners = timeslots.map((total) => {
      // return total.dataValues.namePartner;
      return total.namePartner.length + 1;
    });
    // console.log("climbingPartners", climbingPartners);
    const totalClimbersPerSlot = climbingPartners.reduce(
      (acc, curr) => acc + curr
    );
    // console.log("tot", totalClimbersPerSlot);
    const maxCap = await Timeslot.findByPk(timeslots[0].dataValues.timeslotId);
    // console.log("max", maxCap.dataValues.maxCap);
    if (totalClimbersPerSlot > maxCap.dataValues.maxCap) {
      return res.status(418).send({ message: "MaxCap reached" });
    }

    return res.status(201).send({ message: "Booking added", booking });
  } catch (e) {
    next(e);
  }
});

router.delete("/:bookingId", auth, async (req, res, next) => {
  const { bookingId } = req.params;
  // console.log("id from router", bookingId);
  try {
    const booking = await Bookings.findByPk(bookingId);

    if (!booking) {
      return res.status(404).send("Booking not found");
    }

    const result = await booking.destroy();
    // console.log("result", result);

    return res.status(201).send({ message: "Booking deleted", bookingId });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
