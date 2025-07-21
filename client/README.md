# Anyware Software (Fullstack Challenge) - Client

This project is a modern React + TypeScript application bootstrapped with Vite. It is designed as a full-featured educational dashboard with robust state management, API integration, and internationalization support.

---

## 📁 Folder Structure

```
client/
├── public/                # Static assets
├── src/
│   ├── app/               # Redux store and configuration
│   ├── assets/            # Images and static assets
│   ├── components/        # Reusable UI components (Sidebar, QuizModal, etc.)
│   ├── features/          # Redux slices (e.g., auth)
│   ├── hooks/             # Custom React hooks (e.g., useAnnouncements, useQuizzes)
│   ├── layout/            # Layout components (e.g., Layout.tsx)
│   ├── pages/             # Page components (Dashboard, Login, etc.)
│   ├── routes/            # Route guards and helpers
│   ├── index.css          # Global styles (Tailwind CSS)
│   ├── main.tsx           # App entry point
│   ├── App.tsx            # Main App component
│   ├── i18n.ts            # i18n (internationalization) configuration
│   ├── api.ts             # Axios API instance
│   └── vite-env.d.ts      # Vite environment types
├── package.json           # Project dependencies and scripts
├── tsconfig*.json         # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.ts         # Vite configuration
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
cd client
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

---

## ✨ Features

- **Authentication**: Login/logout with Redux state management.
- **Dashboard**: Modern, responsive dashboard UI with announcements, quizzes, and more.
- **Quizzes**: View, start, and answer quizzes in a modal popup with validation.
- **Announcements**: Fetch and display announcements from the backend.
- **Internationalization (i18n)**: Multi-language support using react-i18next and Redux for language state.
- **API Integration**: Uses Axios and TanStack Query (React Query) for robust data fetching and caching.
- **Global State Management**: Redux Toolkit for auth, language, and other global state.
- **UI Library**: Material-UI (MUI) for consistent, accessible components.
- **Styling**: Tailwind CSS for utility-first styling.
- **Type Safety**: Full TypeScript support throughout the codebase.

---

## 🛠️ Libraries Used

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build tool)
- [Redux Toolkit](https://redux-toolkit.js.org/) (state management)
- [react-redux](https://react-redux.js.org/)
- [@tanstack/react-query](https://tanstack.com/query/latest) (data fetching/caching)
- [axios](https://axios-http.com/) (HTTP client)
- [react-i18next](https://react.i18next.com/) (internationalization)
- [@mui/material](https://mui.com/) (Material-UI components)
- [@mui/icons-material](https://mui.com/components/material-icons/)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)

---

## 📚 How to Add Features

- **Add a new page**: Create a file in `src/pages/` and add a route in `App.tsx`.
- **Add a new API call**: Create a hook in `src/hooks/` using TanStack Query and the `api` instance.
- **Add a new slice/state**: Use Redux Toolkit in `src/app/` or `src/features/`.
- **Add a new language**: Update `src/i18n.ts` and add translations.

---

## 📝 Notes

- This project is the client (frontend) part. The backend API should be running and accessible at the configured `baseURL` in `src/api.ts`.
- For production, build with `npm run build` and serve the `dist/` folder.

---

## License

MIT
