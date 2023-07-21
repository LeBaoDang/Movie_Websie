const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

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
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
}, {
    timestamps: true,
});
 
module.exports = mongoose.model('Video',VideoSchema);