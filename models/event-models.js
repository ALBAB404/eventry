import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    interested_ids: {
        type: Array,
        default: [],
    },
    going_ids: {
        type: Array,
        default: [],
    },
})

export const eventModel = mongoose.models.Event ||  mongoose.model("Event", schema);
