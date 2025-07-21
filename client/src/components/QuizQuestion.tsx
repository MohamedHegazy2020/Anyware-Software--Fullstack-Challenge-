import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface QuizQuestionProps {
  question: { id: string; question: string; options: string[] };
  value: string;
  onChange: (value: string) => void;
}

const QuizQuestion = ({ question, value, onChange }: QuizQuestionProps) => (
  <Box mb={2}>
    <Typography fontWeight={500}>{question.question}</Typography>
    <RadioGroup
      name={`question-${question.id}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {question.options.map((opt, i) => (
        <FormControlLabel key={i} value={opt} control={<Radio />} label={opt} />
      ))}
    </RadioGroup>
  </Box>
);

export default QuizQuestion;
