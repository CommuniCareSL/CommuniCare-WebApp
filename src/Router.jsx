// src/Router.jsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'

import Login from './components/Login'
import Signup from './components/Signup'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;
