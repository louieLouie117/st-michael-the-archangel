import React, {useState} from 'react'

function HeroBanner(props) {

  const [hideText] = useState(true)


  return (
    <div className='HeroBanner-Container'>
      <header>
      <picture>
        {/* <source media='(min-width: 1300px)' srcSet='/assets/HeroImageDesktop.png' /> */}
        <source media='(min-width: 500px)' srcSet='/assets/HeroImageTablet.png' />
       <img src="/assets/HeroImageMobile.png" alt="" />
      </picture>
      <div className='WebsiteName'>
        <h1 style={{display: hideText ? "block": 'none'}}>St. Micheal The Archangel</h1>
        <h2 style={{display: hideText ? "block": 'none'}}>Catholic Church</h2>
      </div>
      </header>
    </div>
  )
}


export default HeroBanner
