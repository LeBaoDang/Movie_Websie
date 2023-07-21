const Video = require('../models/Video');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class MeVideosController{
    //[GET] /mevideos/stored/videos
    storedVideos(req, res, next){
        Video.find({})
        .then(videos => res.render('meVideos/stored_videos', {
            videos: mutipleMongooseToObject(videos)
        }))
        .catch(next);
    }   
}

module.exports = new MeVideosController;