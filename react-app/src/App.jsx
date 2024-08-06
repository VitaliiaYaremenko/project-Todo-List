import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from "./routerConfig/PrivateRoute.jsx";
function App() {

  return (
      <AuthProvider>
          <Router>
              <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route
                      path="/"
                      element={
                          <PrivateRoute>
                              <HomePage />
                          </PrivateRoute>
                      }
                  />
              </Routes>
          </Router>
      </AuthProvider>
  )
}

export default App
