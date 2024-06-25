import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './section/Navbar.jsx'
import Presentation from './section/Presentation.jsx'
import Blog from './section/Blog.jsx'
import Projects from './section/Projects.jsx'
import Footer from './section/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Presentation/>
    <Blog/>
    <Projects/>
    <Footer/>
  </React.StrictMode>,
)
