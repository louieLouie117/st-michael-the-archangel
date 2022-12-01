import React from 'react'
import HeroBanner from '../components/LandingPage/HeroBanner'
import MainSchedule from '../components/LandingPage/MainSchedule'
import Nav from '../components/LandingPage/MainNav'
import LandingPageStyles from '../modules/LandingPageStyles.css'


function LandingPage(props) {
    <LandingPageStyles></LandingPageStyles>
  return (
    <div>
        <HeroBanner></HeroBanner>
        <Nav></Nav>
        <MainSchedule></MainSchedule>
    </div>

  )
}


export default LandingPage
