import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import OnboardingPage from "./pages/OnboardingPage";
import DashboardPage from "./pages/DashboardPage";
import CurriculumPage from "./pages/CurriculumPage";
import ChatPage from "./pages/ChatPage";
import AdminPage from "./pages/AdminPage";
import GoalSettingPage from "./pages/GoalSettingPage";
import HowToUsePage from "./pages/HowToUsePage";
import Week2LessonPage from "./pages/Week2LessonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="onboarding" element={<OnboardingPage />} />
        <Route path="goal-setting" element={<GoalSettingPage />} />
        <Route path="how-to-use" element={<HowToUsePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="week2-lesson" element={<Week2LessonPage />} />
        <Route path="curriculum" element={<CurriculumPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;
