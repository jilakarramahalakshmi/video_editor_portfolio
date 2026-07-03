import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";



import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/portfolio" element={
           
            <Portfolio />
          
        } />

        <Route path="/about" element={
          
            <About />
         
        } />

        <Route path="/contact" element={
          
            <Contact />
          
        } />

        <Route path="/upload" element={
          <ProtectedRoute>
          
              <Upload />
            
          </ProtectedRoute>
        } />

        <Route path="/dashboard" element={
          <ProtectedRoute>
           
              <Dashboard />
         
          </ProtectedRoute>
        } />

        <Route path="/category/:name" element={<Category />} />

        <Route path="/project/:category/:id" element={<ProjectDetails />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}
export default App;