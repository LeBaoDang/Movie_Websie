const express = require('express');
const router = express.Router();

const videosController = require('../app/controllers/VideosController');

// VideoDetailController.index

router.get('/create', videosController.create);
router.post('/store', videosController.store);
router.get('/:id/edit', videosController.edit);
router.put('/:id', videosController.update);
router.delete('/:id', videosController.delete);
router.get('/:slug', videosController.show);

module.exports = router;