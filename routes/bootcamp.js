const express = require('express');
const {
  getBootcamps,
  updateBootcamp,
  deleteBootcamp,
  createBootcamp,
  getBootcamp,
} = require('../controllers.js/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
