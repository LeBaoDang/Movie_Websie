const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    link: { type: String },
    videoId: { type: String, required: true },
    slug: { type: String, slug: 'name'},
    deleted: { type: Boolean, default: false },  // sao này nhớ thêm vô unique: true 
    deletedAt: { type: Date, default: null }, // Thêm trường deletedAt
}, {
    timestamps: true,
});

// add plugin
mongoose.plugin(slug);
VideoSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Video', VideoSchema);