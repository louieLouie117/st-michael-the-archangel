import React from 'react'
import HeroBanner from '../components/LandingPage/HeroBanner'
import Schedule from '../components/LandingPage/Schedule'
import Nav from '../components/LandingPage/MainNav'
import LandingPageStyles from '../modules/LandingPageStyles.css'
import Announcements from '../components/LandingPage/Announcements'
import Sacraments from '../components/LandingPage/Sacraments'


function LandingPage(props) {
    <LandingPageStyles></LandingPageStyles>
  return (
    <div className='LandingPage-PageView'>
        <HeroBanner></HeroBanner>
        <Nav></Nav>
        <Schedule></Schedule>
        <Announcements></Announcements>
        <Sacraments></Sacraments>
    </div>

  )
}


export default LandingPage
