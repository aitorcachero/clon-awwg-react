import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import SustainabilityPage from './pages/SustainabilityPage/SustainabilityPage';
import CareersPage from './pages/CareersPage/CareersPage';
import NewsPage from './pages/NewsPage/NewsPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
