const Video = require('../models/Video');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

class SiteController {
  // [GET] /news
  async index(req, res, next) {
    Video.find({})
    .then(videos => {
        res.render('home', {
            videos: mutipleMongooseToObject(videos)
        });
    })
    .catch(next);
  }


  // [GET] /news/:slug
  show(req, res) {
    res.send('news detail');
  }
}
module.exports = new SiteController;


