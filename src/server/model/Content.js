import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Custom type attribute for mongoose
const ContentType = {
    TEXT: 1,
    IMAGE: 2,
    VIDEO: 3,
    JSON: 4
};

//Content object properties
const content = {
    contentID: {
        type: String,
        required: true
    },
    contentType: {
        type: ContentType,
        required: true,
        default: ContentType.TEXT
    },
    contentInfo: {
        es: {
            type: String,
            required: true
        },
        en: {
            type: String,
            required: true
        }
    }
};

//Collection Name
const collection = {
    collection: 'Static_Content'
};

export default mongoose.model("Content", new Schema(content, collection));