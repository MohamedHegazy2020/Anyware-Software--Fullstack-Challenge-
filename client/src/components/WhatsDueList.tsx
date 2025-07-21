/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import {
  Paper,
  Typography,
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import { useQuizzes } from "../hooks/useQuizzes";
import { useTranslation } from "react-i18next";
import type { Quiz } from "../types/types";
import QuizModal from "./QuizModal";

function normalizeQuestions(
  questions: any
): { id: string; question: string; options: string[] }[] {
  if (!Array.isArray(questions)) return [];
  return questions.map((q, i) => ({
    id: q.id || String(i),
    question: q.question || q.text || `Question ${i + 1}`,
    options: q.options || [],
  }));
}

const WhatsDueList = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useQuizzes();
  const [open, setOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<{ [questionId: string]: string }>({});
  const [showSummary, setShowSummary] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const resetModal = () => {
    setAnswers({});
    setShowSummary(false);
    setSubmitError(null);
  };

  const handleOpen = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    resetModal();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedQuiz(null);
    resetModal();
  };

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    const questions = normalizeQuestions(selectedQuiz?.questions);
    if (questions.length) {
      const unanswered = questions.filter((q) => !answers[q.id]);
      if (unanswered.length > 0) {
        setSubmitError(t("Please answer all questions."));
        return;
      }
    }
    setShowSummary(true);
    setSubmitError(null);
    // Here you could send answers to the backend
  };

  if (isLoading) return <Typography>{t("Loading...")}</Typography>;
  if (error)
    return <Typography color="error">{t("Error loading quizzes")}</Typography>;
  if (!data) return <Typography>{t("No quizzes found")}</Typography>;
  return (
    <Paper elevation={2} sx={{ borderRadius: 3, p: 3, mb: 3 }}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        {t("Quizzes")}
      </Typography>
      <List>
        {data.data?.map((a: Quiz, idx: number) => (
          <ListItem alignItems="flex-start" key={idx} sx={{ mb: 1, px: 0 }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#1976d2" }}>{a.title?.[0] ?? "?"}</Avatar>
            </ListItemAvatar>
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600}>
                {a.title || t("Untitled Quiz")}
              </Typography>
              {a.description && (
                <Typography color="text.secondary" fontSize={14}>
                  {a.description}
                </Typography>
              )}
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ borderRadius: 2, fontWeight: 600, ml: 2 }}
              onClick={() => handleOpen(a)}
            >
              {t("Start Quiz")}
            </Button>
          </ListItem>
        ))}
      </List>
      <QuizModal
        open={open}
        onClose={handleClose}
        quiz={
          selectedQuiz
            ? {
                ...selectedQuiz,
                questions: normalizeQuestions(selectedQuiz.questions),
              }
            : null
        }
        answers={answers}
        onAnswer={handleAnswer}
        onSubmit={handleSubmit}
        showSummary={showSummary}
        submitError={submitError}
        t={t}
      />
    </Paper>
  );
};

export default WhatsDueList;
