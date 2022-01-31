const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// if someone calls any route that does not exist on the server,
// send this as the default
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;