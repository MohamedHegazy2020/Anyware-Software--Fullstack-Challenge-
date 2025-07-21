import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  IconButton,
  AppBar,
  useMediaQuery,
  useTheme,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GradeIcon from "@mui/icons-material/Grade";
import BarChartIcon from "@mui/icons-material/BarChart";
import CampaignIcon from "@mui/icons-material/Campaign";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";


const drawerWidth = 220;

const navItems = [
  { label: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { label: "Schedule", icon: <EventNoteIcon />, path: "/schedule" },
  { label: "Courses", icon: <MenuBookIcon />, path: "/courses" },
  { label: "Gradebook", icon: <GradeIcon />, path: "/gradebook" },
  { label: "Performance", icon: <BarChartIcon />, path: "/performance" },
  { label: "Announcement", icon: <CampaignIcon />, path: "/announcement" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
    setMobileOpen(false);
  };

 

  const drawerContent = (
    <Box className="h-full bg-primary text-white flex flex-col justify-between">
      <div>
        <Toolbar />
        <List>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItemButton
                key={item.label}
                selected={isActive}
                onClick={() => {
                  navigate(item.path);
                  setMobileOpen(false);
                }}
                sx={{
                  my: 1,
                  borderRadius: 2,
                  transition: "all 0.2s",
                  "& .MuiListItemIcon-root": {
                    color: isActive ? "#1976d2" : "inherit",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                  },
                }}
                className={`mx-2 flex items-center gap-2 text-base font-medium rounded-lg transition-all
                  ${
                    isActive
                      ? "bg-white text-primary font-bold shadow border-l-4 border-primary"
                      : ""
                  }
                `}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            );
          })}
        </List>
      </div>
      <Box className="flex flex-col items-center mb-4">
        <Divider
          className="w-full mb-2  "
          sx={{ bgcolor: "rgba(255,255,255,0.2)" }}
        />
        <Avatar
          sx={{
            bgcolor: "#fff",
            color: "#1976d2",
            width: 48,
            height: 48,
            mb: 1,
          }}
        >
          U
        </Avatar>
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{
            color: "#fff",
            borderColor: "#fff",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#1976d2",
              borderColor: "#1976d2",
            },
            width: "80%",
            mb: 1,
          }}
        >
          Logout
        </Button>
        
      </Box>
    </Box>
  );



  return (
  
      <>
        {/* AppBar for mobile menu button */}
        <AppBar
          position="fixed"
          className="md:hidden bg-blue-700"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(true)}
              className="mr-2"
            >
              <MenuIcon />
            </IconButton>
            <span className="text-lg font-bold">Menu</span>
          </Toolbar>
        </AppBar>
        <Box component="nav" aria-label="sidebar navigation">
          {/* Permanent drawer for desktop only */}
          {isMdUp && (
            <Drawer
              variant="permanent"
              open
              className="hidden md:block"
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: drawerWidth,
                  boxSizing: "border-box",
                  background: "#1976d2",
                  color: "#fff",
                },
              }}
            >
              {drawerContent}
            </Drawer>
          )}
          {/* Temporary drawer for mobile only */}
          {!isMdUp && (
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
              className="md:hidden"
              ModalProps={{ keepMounted: true }}
              sx={{
                display: { xs: "block", md: "none" },
                [`& .MuiDrawer-paper`]: {
                  width: drawerWidth,
                  boxSizing: "border-box",
                  background: "#1976d2",
                  color: "#fff",
                },
              }}
            >
              {drawerContent}
            </Drawer>
          )}
        </Box>
      </>
  
  );
};

export default Sidebar;

