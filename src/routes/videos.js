const express = require('express');
const router = express.Router();

const videosController = require('../app/controllers/VideosController');

// VideoDetailController.index

router.get('/create', videosController.create);
router.post('/store', videosController.store);
router.get('/:id/edit', videosController.edit);
router.delete('/:id', videosController.delete);
router.delete('/:id/force', videosController.forceDelete);
router.put('/:id', videosController.update);
router.patch('/:id/restore', videosController.restore);
router.get('/:slug', videosController.show);

module.exports = router;