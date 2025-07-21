import mongoose, { Document, Schema } from "mongoose";
import type { IAnnouncement } from "../types/app";

const AnnouncementSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Announcement = mongoose.model<IAnnouncement & Document>(
  "Announcement",
  AnnouncementSchema
);

export default Announcement;
