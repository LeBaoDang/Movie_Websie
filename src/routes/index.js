
const newsRouter = require('./news');
const meVideosRouter = require('./mevideos');
const siteRouter = require('./site');
const videosRouter = require('./videos');

function route(app) {

    app.use('/news', newsRouter);

    app.use('/videos/mevideos', meVideosRouter)

    app.use("/videos", videosRouter); 

    app.use("/", siteRouter);

}

module.exports = route;