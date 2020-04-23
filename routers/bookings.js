const { Router } = require("express");
const auth = require("../auth/middleware");
const Bookings = require("../models").booking;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const bookings = await Bookings.findAll();
    // console.log("bookings", bookings);
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
    const { namePartner, timeslotId, gymId } = req.body;
    console.log("namePartner", namePartner);
    // if (!comment) {
    //   return res.status(400).send({ message: "Invalid comment" });
    // }
    // if (!serviceId) {
    //   return res.status(400).send({ message: "Service not found" });
    // }

    const booking = await Bookings.create({
      userId: req.user.id,
      namePartner,
      timeslotId,
      gymId,
    });

    return res.status(201).send({ message: "Booking added", booking });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
