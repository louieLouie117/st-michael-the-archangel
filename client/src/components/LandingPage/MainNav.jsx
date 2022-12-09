import React, {useState} from 'react'


function MainNav(props) {

  const [MainMenu, setMainMenu] = useState(false)

  const MainMenuHandler = e =>{
    console.log("button was click")
    if(MainMenu === false){
      setMainMenu(true)
    }else{
      setMainMenu(false)
    }
    return
  }


  return (
    <div className='MainNav-Component'>
      <header>
        <img  onClick={MainMenuHandler} src="/assets/IconMenu.png" alt="" />
        <h1 onClick={MainMenuHandler}>Welcome</h1>
      </header>

      <div style={{display: MainMenu ? "grid": "none"}}>
      <main className='NavList-Container'>
        <ul>
          <li>
            <a href="/parish-staff">Parish Staff</a>
          </li>
          <li>
            <a href="/under-development">Our Ministries</a>
          </li>

          <li>
            <a href="/under-development">Faith Formation</a>
          </li>
          <li>
            <a href="/under-development">Gift Shop & Books</a>
          </li>
       
        </ul>

        
      </main>

      <aside>
        <ul className='contactUs-container'>
          {/* <li>
            <div>
            <p>Phone Number:</p>
            <p>(270) 640-9850</p>
            </div>
            <img src="/assets/iconPhone.png" alt="" />
          </li> */}
          <li>
            <div>
            <p>Address:</p>
            <p>448 State Line Rd Oak Grove KY 42262</p>

            </div>
            <a href="http://maps.google.com/?q=448 State Line Rd Oak Grove KY 42262" target='blank'>
            <img src="/assets/iconMapPin.png" alt=""  />
            </a>
          </li>
        </ul>

      </aside>
      </div>
     
    </div>
  )
}


export default MainNav
