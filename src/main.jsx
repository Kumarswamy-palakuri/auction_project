import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'
import Signin from './components/signin.jsx'
import Signup from './components/signup.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    <Dashboard/>
    <Signin/>
    <Signup/>

  </StrictMode>,
)
