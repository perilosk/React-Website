import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Contact from './pages/Contact'

function App() {

  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/blog/post/:id' element={<Post />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
