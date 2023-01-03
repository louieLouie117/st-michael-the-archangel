import React, {useState}from 'react'

function Announcements(props) {

  const [calendarOptions, setCalendarOptions] = useState(false);

  const [outlookEventLink, setOutlookEventLink ] = useState();
  const [gmailEventLink, setGmailEventLink] = useState ();
  const [yahooEventLink, setYahooEventLink] = useState();
  const [officeEventLink, setOfficeEventLink] = useState();


  // const AdventNoticeHandler = e =>{
  //     console.log("button was click")
  //     setCalendarOptions(true);

  //     setOutlookEventLink("https://outlook.live.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-15T00%3A00%3A00%2B00%3A00&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-14T23%3A00%3A00%2B00%3A00&subject=Advent%20Reconciliation&location=St Micheal The Archangel");


  //     setGmailEventLink("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Advent Reconciliation&dates=20221214T230000Z%2F20221215T000000Z");

  //     setYahooEventLink("https://calendar.yahoo.com/?dur=&et=20221215T000000Z&st=20221214T230000Z&v=60&&title=Advent Reconciliation");


  //     setOfficeEventLink("https://outlook.office.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-15T00%3A00%3A00%2B00%3A00&path=%2Fcalendar%2Faction%2Fcompose&rru=Advent Reconciliation&startdt=2022-12-14T23%3A00%3A00%2B00%3A00&location=St Micheal The Archangel&subject=Advent Reconciliation");


  // }





  const PotluckHandler = e =>{
    setCalendarOptions(true);

    setGmailEventLink("https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230108T000000Z%2F20230108T010000Z&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&text=Potluck%20After%20Mass");

    setOutlookEventLink("https://outlook.live.com/calendar/0/deeplink/compose?allday=false&enddt=2023-01-08T01%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-01-08T00%3A00%3A00%2B00%3A00&subject=Potluck%20After%20Mass");

    setOfficeEventLink("https://outlook.office.com/calendar/0/deeplink/compose?allday=false&enddt=2023-01-08T01%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-01-08T00%3A00%3A00%2B00%3A00&subject=Potluck%20After%20Mass");


    setYahooEventLink("https://calendar.yahoo.com/?dur=&et=20230108T010000Z&in_loc=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&st=20230108T000000Z&title=Potluck%20After%20Mass&v=60");

  }

  const RCIAHandler = e =>{
    setCalendarOptions(true);

    setGmailEventLink("https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230105T010000Z%2F20230105T020000Z&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&text=RCIA%20Rest");

    setOutlookEventLink("https://outlook.live.com/calendar/0/deeplink/compose?allday=false&enddt=2023-01-05T02%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-01-05T01%3A00%3A00%2B00%3A00&subject=RCIA%20Rest");

    setOfficeEventLink("https://outlook.office.com/calendar/0/deeplink/compose?allday=false&enddt=2023-01-05T02%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-01-05T01%3A00%3A00%2B00%3A00&subject=RCIA%20Rest");


    setYahooEventLink("https://calendar.yahoo.com/?dur=&et=20230105T020000Z&in_loc=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&st=20230105T010000Z&title=RCIA%20Rest&v=60");
  }
 

  return (
    <div className='Announcements-ViewPage'>
      <header>
      <h1>Announcements</h1>
      <p>2</p>
      </header>

      <main>
          <ul>


            {/* <li>
              <header>
                <h2>Holy Day of Obligation</h2>
              </header>
              <main>
              <p>Thursday December 8th 9:00 am</p>
              <button onClick={HDDec900Handler}>Add to Calendar</button>

              <p>Thursday December 8th 6:00 pm</p>
              <button onClick={HDDec1800Handler}>Add to Calendar</button>

              </main>

            </li>       */}

            <li>

            <div>           
                <header>
                  <h2>RCIA Restarts</h2>
                </header>
                <main>
                  <p>Wednesday, January 4, 2023 7:00 pm</p>
                  <button onClick={RCIAHandler}>Add to Calendar</button>
                </main>

              </div>

              <div>
              <header>
                <h2>Potluck After Mass</h2>
              </header>

              <main>
                <p>Saturday January 7, 2023 6:00 pm</p>
                <button onClick={PotluckHandler}>Add to Calendar</button>
              </main>

              </div>

             
              

            </li>        
          </ul>

        

      </main>

      <aside style={{display: calendarOptions ? "grid" : "none",
                    left: calendarOptions ? "0px" : "-300px",
                    }}>

                <h2>Selected your calender</h2>
              
                <a href={outlookEventLink} title="Save Event in my Calendar" target="blank">
                  <button>Outlook</button>
                </a>

                <a href={gmailEventLink} title="Save Event in my Calendar" target="blank">
                  <button>Gmail</button>
                </a>

                <a href={yahooEventLink} title="Save Event in my Calendar" target="blank">
                  <button>Yahoo</button>
                </a>

                <a href={officeEventLink} title="Save Event in my Calendar" target="blank">
                  <button>Office</button>
                </a>

                
          </aside>
    </div>
  )
}


export default Announcements
