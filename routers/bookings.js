const { Router } = require("express");
const Bookings = require("../models").booking;

const router = new Router();

router.get("/", async (req, res, next) => {
  const bookings = await Bookings.findAll();
  // console.log("bookings", bookings);
  res.status(200).send(bookings);
});

module.exports = router;
