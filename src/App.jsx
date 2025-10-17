import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Downloads from './pages/Downloads'
import About from './pages/About'
import './App.css'

function Navigation({ theme, toggleTheme, language, toggleLanguage }) {
  const location = useLocation()
  
  const t = {
    es: {
      dashboard: 'Dashboard',
      inventory: 'Inventario',
      downloads: 'Descargas',
      about: 'Acerca'
    },
    en: {
      dashboard: 'Dashboard',
      inventory: 'Inventory',
      downloads: 'Downloads',
      about: 'About'
    }
  }

  const isActive = (path) => location.pathname === path

  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold">GENESIS Core Audit</h1>
            <div className="flex gap-4">
              <Link to="/">
                <Button 
                  variant={isActive('/') ? 'default' : 'ghost'}
                  size="sm"
                >
                  {t[language].dashboard}
                </Button>
              </Link>
              <Link to="/inventory">
                <Button 
                  variant={isActive('/inventory') ? 'default' : 'ghost'}
                  size="sm"
                >
                  {t[language].inventory}
                </Button>
              </Link>
              <Link to="/downloads">
                <Button 
                  variant={isActive('/downloads') ? 'default' : 'ghost'}
                  size="sm"
                >
                  {t[language].downloads}
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant={isActive('/about') ? 'default' : 'ghost'}
                  size="sm"
                >
                  {t[language].about}
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={toggleLanguage}>
              <Globe className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer({ language }) {
  const t = {
    es: {
      legal: '© 2025 Emanuel Pérez Lau — Marca: GENESIS — Concebido por Emanuel con asistencia de IA'
    },
    en: {
      legal: '© 2025 Emanuel Pérez Lau — Brand: GENESIS — Conceived by Emanuel with AI assistance'
    }
  }

  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        {t[language].legal}
      </div>
    </footer>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language')
    return saved || 'es'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation 
          theme={theme} 
          toggleTheme={toggleTheme}
          language={language}
          toggleLanguage={toggleLanguage}
        />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard language={language} />} />
            <Route path="/inventory" element={<Inventory language={language} />} />
            <Route path="/downloads" element={<Downloads language={language} />} />
            <Route path="/about" element={<About language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  )
}

export default App

