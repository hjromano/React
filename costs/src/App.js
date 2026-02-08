import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Newproject from './components/pages/Newproject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';


import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      
      <Navbar />

      <Routes>
        {/* Usando Container como rota pai */}
        <Route element={<Container customClass="min_height" />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/newproject" element={<Newproject />} />
          <Route path="/project/:id" element={<Project />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  )
}

export default App;
