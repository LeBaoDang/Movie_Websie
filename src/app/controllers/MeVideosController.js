const Video = require('../models/Video');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class MeVideosController{
    //[GET] videos/mevideos/stored/videos
    storedVideos(req, res, next) {
        Video.find({})
        .then(videos => res.render('meVideos/stored_videos', {
            videos: mutipleMongooseToObject(videos)
        }))
        .catch(next);
    }   

    //[GET] videos/mevideos/trash/videos
    trashVideos(req, res, next){
        Video.findDeleted({})
        .then(videos => res.render('meVideos/trash_videos', {
            videos: mutipleMongooseToObject(videos)
        }))
        .catch(next);
    }
}

module.exports = new MeVideosController;