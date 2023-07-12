const router = require('express').Router();
const {
  homeCtrl,
  listCtrl,
} = require('../controllers/app.ctrl');

router.get('/home', homeCtrl);
router.get('/list', listCtrl);

module.exports = router;
