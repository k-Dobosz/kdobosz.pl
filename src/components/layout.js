import React from 'react'
import './reset.css'
import './style.css'
import Navbar from './navbar'
import Header from './header'
import SEO from './seo'
import AboutMe from './aboutme'
import Skills from './skills'
import Projects from './projects'
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
      </main>
      <Footer />
    </>
  )
}

export default Layout
