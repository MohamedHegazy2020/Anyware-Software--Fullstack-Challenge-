import { Request, Response, NextFunction } from "express";
import Quiz from "../models/quiz.model";
import asyncHandler from "../utils/asyncHandler";
import { AppError, ApiResponse } from "../middlewares/errorHandler";

// Get all quizzes
export const getQuizzes = asyncHandler(async (req: Request, res: Response) => {
  const quizzes = await Quiz.find().sort({ createdAt: -1 });
  res.json(new ApiResponse(true, quizzes));
});


// Create a new quiz
export const createQuiz = asyncHandler(async (req: Request, res: Response) => {
  console.log(req.body);
  const { title, description, questions } = req.body;
  if (!title || !description || !questions || !Array.isArray(questions)) {
    throw new AppError(
      "All fields are required and questions must be an array",
      400
    );
  }
  const quiz = new Quiz({ title, description, questions });
  await quiz.save();
  res
    .status(201)
    .json(new ApiResponse(true, quiz, "Quiz created successfully"));
});

// Update a quiz
export const updateQuiz = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const quiz = await Quiz.findByIdAndUpdate(id, req.body, { new: true });
    if (!quiz) {
      throw new AppError("Quiz not found", 404);
    }
    res.json(new ApiResponse(true, quiz, "Quiz updated successfully"));
  }
);

// Delete a quiz
export const deleteQuiz = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const quiz = await Quiz.findByIdAndDelete(id);
    if (!quiz) {
      throw new AppError("Quiz not found", 404);
    }
    res.json(new ApiResponse(true, undefined, "Quiz deleted successfully"));
  }
);
