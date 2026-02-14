import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
