import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO VIDYARTHI TECH' title='Learn Beyond The Classroom' />
            <p>“Technology is not a silver bullet. It’s only as good as the teachers … using it as one more tool to help inspire, and teach, and work through problems.” </p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
