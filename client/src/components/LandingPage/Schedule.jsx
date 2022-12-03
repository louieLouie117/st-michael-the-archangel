import React from 'react'

function MainSchedule(props) {
  return (
    <div className='Schedule-Component'>
      <header>
        <h1>We invite you to join us and live a sacramental life.</h1>
      </header>
      <main>
        <section>
            <h2>Mass Schedule</h2>
            <ul className='Schedule-Container'>
              <li><p>Saturday</p> <p>5:00 PM</p></li>
              <li><p>Sunday</p> <p>8:30 AM | 11:30 AM</p></li>
              <li><p>Wednesday</p> <p>6:00 PM</p></li>
              <li><p>M, TH, F</p> <p>5:00 PM</p></li>

            </ul>
        </section>

        <section>
            <h2>Adoration</h2>
            <ul className='Schedule-Container'>
           
              <li><p>Friday</p> <p>10:00 AM - 11:00 AM</p></li>

            </ul>
        </section>

        <section>
            <h2>Confession</h2>
            <ul className='Schedule-Container'>
              <li><p>Saturday</p> <p>4:30 PM</p></li>
              <li><p>Or by Appointment</p> <p>.</p></li>


            </ul>
        </section>
      </main>
      <footer></footer>
    </div>
  )
}


export default MainSchedule
