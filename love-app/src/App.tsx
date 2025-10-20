import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import { ThemeProvider } from './contexts/ThemeContext'

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
      {isLoggedIn ? <Home onLogout={handleLogout} /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </ThemeProvider>
  )
}

export default App
