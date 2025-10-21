import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import { ThemeProvider } from './contexts/ThemeContext'
import MemoryPhoto from './pages/MemoryPhoto'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check if user was previously logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn')
    if (loggedIn === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', 'true')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
  }

  return (
    <ThemeProvider>
      <BrowserRouter basename="/love-app">
        <Routes>
          <Route 
            path="/login" 
            element={isLoggedIn ? <Navigate to="/" replace /> : <Login onLoginSuccess={handleLoginSuccess} />} 
          />
          <Route 
            path="/" 
            element={isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/memory-photo" 
            element={isLoggedIn ? <MemoryPhoto /> : <Navigate to="/login" replace />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
