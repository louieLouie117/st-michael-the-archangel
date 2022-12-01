import React, {useState} from 'react'

function HeroBanner(props) {

  const [hideText] = useState(false)


  return (
    <div>
      <h1 style={{display: hideText ? "block": 'none'}}>St. Micheal The Archangel Catholic Church</h1>
       <img src="/assets/HeroImge.png" alt="" />
    </div>
  )
}


export default HeroBanner
