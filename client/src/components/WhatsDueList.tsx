import React, { useState } from "react";
import {
  Paper,
  Typography,
  ListItem,
  List,
  ListItemAvatar,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
} from "@mui/material";
import { useQuizzes } from "../hooks/useQuizzes";
import { useTranslation } from "react-i18next";
import type { Quiz } from "../types/types";

interface QuizWithOptional extends Quiz {
  author?: string;
  dueDate?: string;
  status?: string;
  questions?: Question[];
}

interface Question {
  id: string;
  text: string;
  options: string[];
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "-";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const WhatsDueList = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useQuizzes();
  const [open, setOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<QuizWithOptional | null>(
    null
  );
  const [answers, setAnswers] = useState<{ [questionId: string]: string }>({});
  const [showSummary, setShowSummary] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const resetModal = () => {
    setAnswers({});
    setShowSummary(false);
    setSubmitError(null);
  };

  const handleOpen = (quiz: QuizWithOptional) => {
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
    if (selectedQuiz?.questions) {
      const unanswered = selectedQuiz.questions.filter((q) => !answers[q.id]);
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
        {data.data?.map((a: QuizWithOptional, idx: number) => (
          <ListItem alignItems="flex-start" key={idx} sx={{ mb: 1, px: 0 }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#1976d2" }}>
                {a.author?.[0] ?? a.title?.[0] ?? "?"}
              </Avatar>
            </ListItemAvatar>
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600}>
                {a.title || t("Untitled Quiz")}
              </Typography>
              <Typography color="text.secondary" fontSize={13}>
                {formatDate(a.dueDate)}
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

      {/* Quiz Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {selectedQuiz?.title || t("Quiz")}{" "}
          <span style={{ fontWeight: 400, fontSize: 14, marginLeft: 8 }}>
            {selectedQuiz?.dueDate ? formatDate(selectedQuiz.dueDate) : ""}
          </span>
        </DialogTitle>
        <DialogContent>
          {showSummary ? (
            <Box>
              <Typography variant="h6" mb={2}>
                {t("Your Answers")}
              </Typography>
              {selectedQuiz?.questions?.map((q) => (
                <Box key={q.id} mb={2}>
                  <Typography fontWeight={500}>{q.text}</Typography>
                  <Typography color="text.secondary">
                    {answers[q.id]}
                  </Typography>
                </Box>
              ))}
              <Alert severity="success" sx={{ mt: 2 }}>
                {t("Your answers have been submitted!")}
              </Alert>
            </Box>
          ) : selectedQuiz?.questions && selectedQuiz.questions.length > 0 ? (
            <>
              {submitError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {submitError}
                </Alert>
              )}
              {selectedQuiz.questions.map((q) => (
                <Box key={q.id} mb={2}>
                  <Typography fontWeight={500}>{q.text}</Typography>
                  <RadioGroup
                    value={answers[q.id] || ""}
                    onChange={(e) => handleAnswer(q.id, e.target.value)}
                  >
                    {q.options.map((opt, i) => (
                      <FormControlLabel
                        key={i}
                        value={opt}
                        control={<Radio />}
                        label={opt}
                      />
                    ))}
                  </RadioGroup>
                </Box>
              ))}
            </>
          ) : (
            <Typography color="text.secondary">
              {t("No questions available")}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("Close")}</Button>
          {!showSummary && selectedQuiz?.questions?.length && (
            <Button onClick={handleSubmit} variant="contained" color="primary">
              {t("Submit")}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default WhatsDueList;
