import "./i18n";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import { Provider, useSelector } from "react-redux";
import { store } from "./app/store";
import type { RootState } from "./app/store";
import { useEffect } from "react";
import { setI18nLanguage } from "./i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";
import Schedule from "./pages/Schedule";
import Courses from "./pages/Courses";
import Gradebook from "./pages/Gradebook";
import Announcement from "./pages/Announcement";
import Performance from "./pages/Performance";

function I18nSync() {
  const lang = useSelector((state: RootState) => state.language.lang);
  useEffect(() => {
    setI18nLanguage(lang);
  }, [lang]);
  return null;
}

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <I18nSync />
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/gradebook" element={<Gradebook />} />
              <Route path="/announcement" element={<Announcement />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
