const express = require('express');
const router = express.Router();

const meVideoController = require('../app/controllers/MeVideosController');

router.get('/stored/videos', meVideoController.storedVideos);
router.get('/trash/videos', meVideoController.trashVideos );

module.exports = router;