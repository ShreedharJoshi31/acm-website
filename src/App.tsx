import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Events } from "./pages/Events";
import { Teams } from "./pages/Teams";
import { JoinUs } from "./pages/JoinUs";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} /> 
          <Route path="/teams" element={<Teams />} />
          <Route path="/joinus" element={<JoinUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;