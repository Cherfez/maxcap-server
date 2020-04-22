const { Router } = require("express");
const Gyms = require("../models").gym;
const Timeslot = require("../models").timeslot;

const router = new Router();

router.get("/", async (req, res, next) => {
  const gyms = await Gyms.findAll();
  // console.log("gyms", gyms);
  res.status(200).send(gyms);
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (isNaN(parseInt(id))) {
      return res.status(400).send({ message: "Gym id is not a number" });
    }

    const gym = await Gyms.findByPk(id, {
      include: [
        {
          model: Timeslot,
          attributes: ["weekday", "startTime", "endTime", "gymId", "maxCap"],
          where: { gymId: id },
        },
      ],
    });

    if (gym === null) {
      return res.status(404).send({ message: "Gym not found" });
    }

    res.status(200).send({ message: "ok", gym });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
