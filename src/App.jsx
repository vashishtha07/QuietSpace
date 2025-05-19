import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Support from './components/Support'
import Community from './components/Community'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path="/support" element={<Support />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
