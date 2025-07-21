import { Container, Grid } from "@mui/material";

import ExamsTimeCard from "../components/ExamsTimeCard";
import AnnouncementsList from "../components/AnnouncementsList";
import WhatsDueList from "../components/WhatsDueList";

const Dashboard = () => {
  // const { t } = useTranslation();
  // Example: t('Announcements') can be used in components that accept a title prop
  return (
    <Container maxWidth="xl" sx={{ mt: 8, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid size={12}>
          <ExamsTimeCard />
        </Grid>
        <Grid size={{xs: 12, md: 8  }}>
          <AnnouncementsList />
        </Grid>
        <Grid size={{xs: 12, md: 4}}>
          <WhatsDueList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
