const express = require('express');
const router = express.Router();
const {
	getAllBootcamp,
	getSingleBootcamp,
	createBootcamp,
	updateBootcamp,
	deleteBootcamp,
} = require('../controllers/bootcamp.controller');

router.route('/').get(getAllBootcamp).post(createBootcamp);
router
	.route('/:id')
	.get(getSingleBootcamp)
	.put(updateBootcamp)
	.delete(deleteBootcamp);

module.exports = router;
