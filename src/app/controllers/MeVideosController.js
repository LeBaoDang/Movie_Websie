const Video = require('../models/Video');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class MeVideosController {
    //[GET] videos/mevideos/stored/videos
    storedVideos(req, res, next) {

        // let videoQuery = Video.find({});

        // if(req.query.hasOwnProperty('_sort')){
        //     const isValidtype = ['asc','desc'].includes(req.query.type);
        //     videoQuery = videoQuery.sort({
        //         [req.query.column]: isValidtype ? req.query.type : 'desc',
        //     });
        // }

        Promise.all([Video.find({}).sortable(req), 
                    Video.countDocumentsDeleted()])
            .then(([videos, deletedCount]) =>   
                res.render('meVideos/stored_videos', {
                deletedCount,
                videos: mutipleMongooseToObject(videos)
            }))
            .catch(next);

        // Video.countDocumentsDeleted()
        //     .then((deletedCount) => console.log(deletedCount))
        //     .catch(() => {});

        // Video.find({})
        //     .then(videos => res.render('meVideos/stored_videos', {
        //         videos: mutipleMongooseToObject(videos)
        //     }))
        //     .catch(next);
    }

    //[GET] videos/mevideos/trash/videos
    trashVideos(req, res, next) {
        Video.findDeleted({})
            .then((videos) =>
                res.render('meVideos/trash_videos', {
                    videos: mutipleMongooseToObject(videos),
                }))
            .catch(next);
    }
}

module.exports = new MeVideosController;