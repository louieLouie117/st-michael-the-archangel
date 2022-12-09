import React from 'react'
import BackHome from '../components/LandingPage/BackHome'

function OurMinistries(props) {
  return (
    <div className='OurMinistriesViewPage'>
      <nav className='PageHeaderBack'>
      <BackHome></BackHome>
      <h1>Our Ministries</h1>
      </nav>

      <main>
        <ul>
          <li>
            <h2>MARTHA'S MINISTRY</h2>
            <p>Martha's Ministry is a women's group at St Michael the Archangel Catholic Church that was started to create community and fellowship within the different Masses here at St. Michael's. This group incorporates all demographics of women that are on and have been through different journeys in life.  Whether you are 20 or 90 you still have experiences to offer and your input may help another on their spiritual walk. We welcome all ladies of the church along with your friends and relatives.  Please join us for a wonderful afternoon of spiritual growth and fellowship! Meets the 3rd Saturday of every month 12:30-2:30. (Refreshments are provided)</p>
          </li>

          <li>
            <h2>YOUTH GROUP</h2>
            <p>St, Michael the Archangel Catholic Church youth group is where the parish youth come together to share in their faith and fellowship. Along with giving our youth a rich sense of faith and fellowship through organized group activities; we strive to teach our youth humanity with local community and charitable work. Please bring your youth for a fun adventure in their faith with great friends! Feel free to contact Emma Hockaday with any questions or concerns 270-874-7070</p>
          </li>


          <li>
            <h2>MUSIC MINISTRY</h2>
            <p>Choir practice will be 30 minutes before each mass. If you're interested in joining the choir, please contact the Music Director, Dr. David Goldblatt. You may email him at goldblattd@apsu.edu</p>
          </li>

          <li>
            <h2>QUILTING MINISTRY</h2>
            <p>If you have a love for quilting or are interested in learning come join the quilting ministry. Please bring your sewing machine. For more details, please contact Ms. Gail Dunton at 615-478-4614.</p>
          </li>

          
          <li>
            <h2>Prayer Group</h2>
            <p>All are welcome to come join the Prayer Group. Prayer Group meets every Tuesday at 9:00 am in the church.</p>
          </li>

        </ul>
      </main>
    </div>
  )
}


export default OurMinistries
