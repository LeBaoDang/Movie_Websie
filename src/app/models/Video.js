const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    name: { type: String, required: true },
    discription: { type: String }, 
    image: { type: String },
    link: { type: String },
    slug: { type: String },
    videoId: { type: String, required: true },
    slug: { type: String, slug: 'name'},
    // unique tồn di nhất
    // ở vesion mới nhất thì không tồn tại
}, {
    timestamps: true,
});

// add plugin
mongoose.plugin(slug);
VideoSchema.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all' });

module.exports = mongoose.model('Video',VideoSchema);