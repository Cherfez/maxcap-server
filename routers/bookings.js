const { Router } = require("express");
const auth = require("../auth/middleware");
const Bookings = require("../models").booking;

const router = new Router();

router.get("/", async (req, res, next) => {
  const bookings = await Bookings.findAll();
  // console.log("bookings", bookings);
  res.status(200).send(bookings);
});

router.post("/", auth, async (req, res, next) => {
  try {
    if (req.user.id === null) {
      return res.status(400).send({ message: "Not logged in!" });
    }
    const { finalPartners, timeslotId, gymId } = req.body;

    const namePartner = finalPartners;
    // if (!comment) {
    //   return res.status(400).send({ message: "Invalid comment" });
    // }
    // if (!serviceId) {
    //   return res.status(400).send({ message: "Service not found" });
    // }

    const booking = await Bookings.create({
      namePartner,
      timeslotId,
      gymId,
      userId: req.user.id,
    });

    return res.status(201).send({ message: "Feedback added", feedback });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
