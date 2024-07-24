import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import AboutUs from "./AboutUs"

const About = () => {
  return (
    <>
      <Back title='About Us ⬇' />
      <AboutUs/>
      <AboutCard />


    </>
  )
}

export default About
