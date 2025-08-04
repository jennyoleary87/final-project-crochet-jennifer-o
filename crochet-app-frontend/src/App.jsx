import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetails from './components/ProjectDetails';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectId" element={<ProjectDetails />} />
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
