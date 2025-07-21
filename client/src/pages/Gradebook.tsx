import { Container, Typography, Paper, Box } from "@mui/material";

const Gradebook = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography
        variant="h4"
        component="h1"
        color="primary"
        fontFamily="heading"
        fontWeight={700}
        mb={4}
      >
        Gradebook
      </Typography>
      <Paper elevation={3} sx={{ borderRadius: 3, p: 4, minHeight: 200 }}>
        <Box>
          <Typography
            variant="body1"
            color="text.secondary"
            fontFamily="body"
            fontSize={18}
          >
            Your Gradebook will appear here soon.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Gradebook;
