import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
      <Router>
        <Navbar />
        <main className="py-4">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Login />} /> {/* Default route */}
          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;