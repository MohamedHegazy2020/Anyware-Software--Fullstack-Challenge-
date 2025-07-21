/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import QuizQuestion from "./QuizQuestion";

interface Question {
  id: string;
  question: string;
  options: string[];
}

interface QuizModalProps {
  open: boolean;
  onClose: () => void;
  quiz: any;
  answers: { [questionId: string]: string };
  onAnswer: (questionId: string, value: string) => void;
  onSubmit: () => void;
  showSummary: boolean;
  submitError: string | null;
  t: (key: string) => string;
}

const QuizModal = ({
  open,
  onClose,
  quiz,
  answers,
  onAnswer,
  onSubmit,
  showSummary,
  submitError,
  t,
}: QuizModalProps) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <DialogTitle>
      {quiz?.title || t("Quiz")}{" "}
      <span style={{ fontWeight: 400, fontSize: 14, marginLeft: 8 }}>
        {quiz?.dueDate}
      </span>
    </DialogTitle>
    <DialogContent>
      {showSummary ? (
        <Box>
          <Typography variant="h6" mb={2}>
            {t("Your Answers")}
          </Typography>
          {quiz?.questions?.map((q: Question) => (
            <Box key={q.id} mb={2}>
              <Typography fontWeight={500}>{q.question}</Typography>
              <Typography color="text.secondary">{answers[q.id]}</Typography>
            </Box>
          ))}
          <Alert severity="success" sx={{ mt: 2 }}>
            {t("Your answers have been submitted!")}
          </Alert>
        </Box>
      ) : quiz?.questions && quiz.questions.length > 0 ? (
        <>
          {submitError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {submitError}
            </Alert>
          )}
          {quiz.questions.map((q: Question) => (
            <QuizQuestion
              key={q.id}
              question={q}
              value={answers[q.id] || ""}
              onChange={(val: string) => onAnswer(q.id, val)}
            />
          ))}
        </>
      ) : (
        <Typography color="text.secondary">
          {t("No questions available")}
        </Typography>
      )}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>{t("Close")}</Button>
      {!showSummary && quiz?.questions?.length && (
        <Button onClick={onSubmit} variant="contained" color="primary">
          {t("Submit")}
        </Button>
      )}
    </DialogActions>
  </Dialog>
);

export default QuizModal;
