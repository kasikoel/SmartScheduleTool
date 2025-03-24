import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Header with Navigation Links */}
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Login</a></li>
                            <li><a href="/dashboard">Dashboard</a></li>
                        </ul>
                    </nav>
                </header>

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;