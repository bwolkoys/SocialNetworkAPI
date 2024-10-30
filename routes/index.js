const router = require('express').Router();
const apiRoutes = require('./api'); //importing more routes from ./api


router.use('/api', apiRoutes);
//cating all routes that dont match the current defined routes
router.use((req, res) => {
  res.status(404).send('message: error');
});

module.exports = router;