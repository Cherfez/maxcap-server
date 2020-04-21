const { Router } = require("express");
const Timeslots = require("../models").timeslot;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const timeslots = await Timeslots.findAll({
      // where: { gymId: req.gym.id },
      where: { gymId: 1 },
    });

    if (!timeslots) {
      return res.status(400).send({ message: "Timeslot does not exist!" });
    }

    // console.log("timeslots", timeslots);
    res.status(200).send(timeslots);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
