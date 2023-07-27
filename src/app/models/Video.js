const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    _id: {type: Number},
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    link: { type: String },
    videoId: { type: String, required: true },
    slug: { type: String, slug: 'name'},
    deleted: { type: Boolean, default: false },  // sao này nhớ thêm vô unique: true
    deletedAt: {type: Date}
}, {
    _id: false,
    timestamps: true,
});

//custom query helpers
VideoSchema.query.sortable = function(req){
    if(req.query.hasOwnProperty('_sort')){
        const isValidtype = ['asc','desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidtype ? req.query.type : 'desc',
        });
    }
    return this;
}

// add plugin
mongoose.plugin(slug);

VideoSchema.plugin(AutoIncrement);
VideoSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Video', VideoSchema);