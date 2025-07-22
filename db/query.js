import { eventModel } from "@/models/event-models";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

export async function getEvents() {
    const allEvents = await eventModel.find().lean();
    return replaceMongoIdInArray(allEvents);
}

export async function getEventById(id) {
    const event = await eventModel.findById(id).lean();
    return replaceMongoIdInObject(event);
}