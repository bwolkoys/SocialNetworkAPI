const router = require("express").Router();
const thoughtRoutes = require("./thought_route");
const userRoutes = require("./user_route");

router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

module.exports = router;