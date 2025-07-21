import mongoose, { Document, Schema } from "mongoose";
import type { IQuiz, IQuestion } from "../types/app";

const QuestionSchema: Schema = new Schema<IQuestion>({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
});

const QuizSchema: Schema = new Schema<IQuiz>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: { type: [QuestionSchema], required: true },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Quiz = mongoose.model<IQuiz & Document>("Quiz", QuizSchema);

export default Quiz;
