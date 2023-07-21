const Video = require('../models/Video');
const { mongooseToObject } = require('../../util/mongoose');

class VideosController {
  // [GET] /videos/:slug
  show(req, res, next) {

    Video.findOne({ slug: req.params.slug })
      .then(video => {
        res.render('videos/show', { video: mongooseToObject(video) });
      })
      .catch(next);

    // res.send('slug' + req.params.slug)
  }

  // [POST] /videos/create
  create(req, res, next) {
    res.render('videos/create');
  }

  // [POST] /videos/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
    const video = new Video(formData);
    video.save()
      .then(() => res.redirect('/'))
      .catch(error => {
        res.status(500).send('Đã xảy ra lỗi khi lưu video.');
      })
  }

  //[GET] /videos/:id/edit
  edit(req, res, next) {
    Video.findById(req.params.id)
    .then(video => res.render('videos/edit', {
      video: mongooseToObject(video)
    }))
    .catch(next);
  }

  //[PUT] /videos/:id
  update(req, res, next) { 
    Video.updateOne({_id: req.params.id}, req.body)
    .then(() => res.redirect('mevideos/stored/videos'))
    .catch(next);
  }

  delete(req, res, next){
    Video.delete({ _id: req.params.id })
    .then(() => res.redirect('back'))
    .catch(next);
  }

  //[PATCH] /videos/:id/restore
  restore(req, res, next) {
    Video.restore({ _id: req.params.id })
    .then(() => res.redirect('back'))
    .catch(next);
  }
}
module.exports = new VideosController;