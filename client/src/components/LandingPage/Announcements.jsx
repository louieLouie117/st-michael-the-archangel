import React, {useState}from 'react'

function Announcements(props) {
  const [calendarOptions, setCalendarOptions] = useState(false);

  const addToCalendarHandler = e =>{
      console.log("button was click")
      setCalendarOptions(true);
  }
  return (
    <div className='Announcements-ViewPage'>
      <header>
      <h1>Announcements</h1>
      <p>1</p>
      </header>
      <main>
          <ul>
            <li>
              <header>
                <h2>Advent Reconciliation</h2>
              </header>
              <main>
              <p>Wednesday December 14th 5:00pm</p>
              </main>
              <footer>
              

                <button onClick={addToCalendarHandler}>Add to Calendar</button>
              </footer>
            </li>           
          </ul>

        

      </main>

      <aside style={{display: calendarOptions ? "grid" : "none",
                    left: calendarOptions ? "0px" : "-300px",
                    transition: calendarOptions ? "smooth" : "smooth",
                    transition: calendarOptions ? "30s" : "30s"}}>

                <h2>Selected your calender</h2>
              
                <a href="https://outlook.office.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-15T00%3A00%3A00%2B00%3A00&path=%2Fcalendar%2Faction%2Fcompose&rru=Advent Reconciliation&startdt=2022-12-14T23%3A00%3A00%2B00%3A00&location=St Micheal The Archangel&subject=Advent Reconciliation" title="Save Event in my Calendar" target="blank">
                  <button>Outlook</button>
                </a>

                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Advent Reconciliation&dates=20221214T230000Z%2F20221215T000000Z" title="Save Event in my Calendar" target="blank">
                  <button>Gmail</button>
                </a>

                <a href="https://calendar.yahoo.com/?dur=&et=20221215T000000Z&st=20221214T230000Z&v=60&&title=Advent Reconciliation" title="Save Event in my Calendar" target="blank">
                  <button>Yahoo</button>
                </a>

                
          </aside>
    </div>
  )
}


export default Announcements