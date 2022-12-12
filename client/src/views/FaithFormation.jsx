import React from 'react'
import BackHome from '../components/LandingPage/BackHome'

function FaithFormation(props) {
  return (
    <div className='FaithFormationViewPage'>
        <nav className='PageHeaderBack'>
            <BackHome></BackHome>
            <h1>Faith Formation</h1>
        </nav>
        <main>
            <section>
                <h2>RCIA</h2>
                <p>Wednesday 7:00PM, in the Parish Hall</p>
                <a href="https://www.youtube.com/watch?v=OPvhIouj3Pg" target="blank">
                <button>How do I become a catholic</button>
                </a>
            </section>
            <section>
                <h2>Registration Forms</h2>
                <h2>Vacation Bible School</h2>
                <button>VBS Registration</button>
                <button>Faith Formation Registration</button>
                <button>Youth 2022 Registration</button>
            </section>

        </main>
    </div>
  )
}


export default FaithFormation
