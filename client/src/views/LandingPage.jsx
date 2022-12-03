import React from 'react'
import HeroBanner from '../components/LandingPage/HeroBanner'
import Schedule from '../components/LandingPage/Schedule'
import Nav from '../components/LandingPage/MainNav'
import LandingPageStyles from '../modules/LandingPageStyles.css'


function LandingPage(props) {
    <LandingPageStyles></LandingPageStyles>
  return (
    <div>
        <HeroBanner></HeroBanner>
        <Nav></Nav>
        <Schedule></Schedule>
    </div>

  )
}


export default LandingPage
