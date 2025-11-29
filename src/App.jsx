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
import CertificationsPage from "./pages/CertificationsPage";
import NotFoundPage from "./pages/NotFoundPage";
import MasteryDashboardPage from "./pages/MasteryDashboardPage";
import Week1CaseStudyPage from "./pages/Week1CaseStudyPage";
import Week1QuizPage from "./pages/Week1QuizPage";
import Week1LessonPage from "./pages/Week1LessonPage";

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
        <Route path="week1-case-study" element={<Week1CaseStudyPage />} />
        <Route path="week1-lesson" element={<Week1LessonPage />} />
        <Route path="week1-quiz" element={<Week1QuizPage />} />
        <Route path="certifications" element={<CertificationsPage />} />
        <Route path="mastery-dashboard" element={<MasteryDashboardPage />} />
        <Route path="curriculum" element={<CurriculumPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
