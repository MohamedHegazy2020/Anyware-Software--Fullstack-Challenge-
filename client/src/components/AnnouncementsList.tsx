import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

import { useTranslation } from "react-i18next";
import { useAnnouncements } from "../hooks/useAnnouncements";

interface Announcement {
  author: string;
  content: string;
  date: string;
  title: string;
}



const AnnouncementsList = () => {
  const { t } = useTranslation();
  const { data, isLoading, error } = useAnnouncements();
  if (isLoading) return <Typography>{t("Loading...")}</Typography>;
  if (error)
    return (
      <Typography color="error">{t("Error loading announcements")}</Typography>
    );
  if (!data) return <Typography>{t("No announcements found")}</Typography>;
 

  return (
    <Paper elevation={2} sx={{ borderRadius: 3, p: 3 }}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        {t("Announcements")}
      </Typography>
      <List>
        {data.data?.map((a: Announcement, idx: number) => (
          <ListItem alignItems="flex-start" key={idx} sx={{ mb: 1, px: 0 }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#1976d2" }}>{a.author[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <Typography fontWeight={600} component="span">
                    {a.author}
                  </Typography>
                  <Typography
                    component="span"
                    color="text.secondary"
                    sx={{ ml: 1, fontSize: 14 }}
                  >
                    {a.title}
                  </Typography>
                  <Typography
                    component="span"
                    color="text.secondary"
                    sx={{ ml: 2, fontSize: 12 }}
                  >
                    {new Date(a.date).toLocaleDateString()}
                  </Typography>
                </>
              }
              secondary={
                <Typography color="text.secondary">{a.content}</Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AnnouncementsList;
