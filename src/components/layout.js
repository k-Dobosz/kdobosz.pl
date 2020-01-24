import React from "react"
import "./reset.css"
import "./style.css"
import Header from "./header"
import SEO from "./seo"
import AboutMe from "./aboutme"
import Skills from "./skills"
import Projects from "./projects"
import Footer from "./footer"

const Layout = () => {
  return (
    <>
      <Header/>
      <main>
        <SEO/>
        <AboutMe/>
        <Skills/>
        <Projects/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout
