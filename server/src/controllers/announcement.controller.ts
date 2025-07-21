import { Request, Response, NextFunction } from "express";
import Announcement from "../models/announcement.model";
import asyncHandler from "../utils/asyncHandler";
import { AppError, ApiResponse } from "../middlewares/errorHandler";

// Get all announcements
export const getAnnouncements = asyncHandler(
  async (req: Request, res: Response, next: NextFunction    ) => {
    const announcements = await Announcement.find().sort({ date: -1 });
    res.json(new ApiResponse(true, announcements));
  }
);

// Create a new announcement
export const createAnnouncement = asyncHandler(
  async (req: Request, res: Response , next: NextFunction) => {
    const { title, content, author } = req.body;
    console.log(title, content, author);
    if (!title || !content || !author) {
      return next(new AppError("All fields are required", 400));
    }
    const announcement = await Announcement.create({ title, content, author, date: new Date() });
    // await announcement.save();
    res
      .status(201)
      .json(
        new ApiResponse(true, announcement, "Announcement created successfully")
      );
  }
);

// Update an announcement
export const updateAnnouncement = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const announcement = await Announcement.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!announcement) {
      return next(new AppError("Announcement not found", 404));
    }
    res.json(
      new ApiResponse(true, announcement, "Announcement updated successfully")
    );
  }
);

// Delete an announcement
export const deleteAnnouncement = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const announcement = await Announcement.findByIdAndDelete(id);
    if (!announcement) {
      return next(new AppError("Announcement not found", 404));
    }
    res.json(
      new ApiResponse(true, undefined, "Announcement deleted successfully")
    );
  }
);
