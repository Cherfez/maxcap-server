const { Router } = require("express");
const Gyms = require("../models").gym;

const router = new Router();

router.get("/", async (req, res, next) => {
  const gyms = await Gyms.findAll();
  // console.log("gyms", gyms);
  res.status(200).send(gyms);
});

module.exports = router;
