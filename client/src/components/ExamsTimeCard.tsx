import { Card, Box, Typography, Button } from "@mui/material";

const ExamsTimeCard = () => (
  <Card sx={{ borderRadius: 3, mb: 3, p: 2, display: 'flex', alignItems: 'center', minHeight: 180 }}>
    <Box flex={1}>
      <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
        EXAMS TIME
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Here we are, Are you ready to fight? Don’t worry, we prepared some tips to be ready for your exams.
      </Typography>
      <Typography variant="caption" color="text.disabled" fontStyle="italic" gutterBottom>
        “Nothing happens until something moves” - Albert Einstein
      </Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" sx={{ borderRadius: 2, px: 3, fontWeight: 600 }}>
          View exams tips
        </Button>
      </Box>
    </Box>
    <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 4 }}>
      <img src="/vite.svg" alt="exam illustration" style={{ width: 120, opacity: 0.7 }} />
    </Box>
  </Card>
);

export default ExamsTimeCard; 