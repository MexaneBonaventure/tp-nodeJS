const router = require('express').Router();
const appRouter = require('./app.routes');
const apiRouter= require('./api.routes');

router.use(appRouter);
router.use(apiRouter);

router.get('*', (request, response) => { response.redirect('/home') });

module.exports = router;