import React from 'react'
import './reset.css'
import './style.css'
import Navbar from './navbar'
import Header from './header'
import SEO from './seo'
import AboutMe from './aboutme'
import Projects from './projects'
import Contact from "./contact";
import Footer from './footer'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <SEO />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Layout
