const { Router } = require("express");
const Gyms = require("../models").gym;
const Timeslot = require("../models").timeslot;
const Bookings = require("../models").booking;

const router = new Router();

router.get("/", async (req, res, next) => {
  const gyms = await Gyms.findAll();
  // console.log("gyms", gyms);
  res.status(200).send(gyms);
});

router.get("/:id/booking", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (isNaN(parseInt(id))) {
      return res.status(400).send({ message: "Gym id is not a number" });
    }

    const gym = await Gyms.findByPk(id, {
      include: [
        {
          model: Timeslot,
          attributes: [
            "id",
            "weekday",
            "startTime",
            "endTime",
            "gymId",
            "maxCap",
          ],
        },
      ],
    });

    if (gym === null) {
      return res.status(404).send({ message: "Gym not found" });
    }

    const bookings = await Bookings.findAll({
      where: { gymId: id },
    });

    res.status(200).send({ message: "ok", gym, bookings });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
