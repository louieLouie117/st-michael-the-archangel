import React from 'react'

function FeedBack(props) {
  return (
    <div className='FeedBack-Container'>
        <header>
        <h1>Feed Back</h1>
        <p>We would love your feedback.</p>
        <p>Did you enjoy our website?</p>
        </header>
        <main>
            <a href="mailto:st.michaeloakgrove@gmail.com,LCwebsiteSolutions@outlook.com?subject=Yes I did enjoy the website.&body=I did enjoy the website because">
            <button>Yes</button>
            </a>
            <a href="mailto:st.michaeloakgrove@gmail.com,LCwebsiteSolutions@outlook.com?subject=No I did not enjoy the website.&body=I did not enjoy the website because">
            <button>No</button>
            </a>
        </main>
        <aside>
            <p>Website Designed by <a href="https://www.luiscardona.app/" target="_blank"> LC Solutions</a></p>
        </aside>
    </div>
  )
}


export default FeedBack
