import React, {useState}from 'react'

function Announcements(props) {

  const [calendarOptions, setCalendarOptions] = useState(false);

  const [outlookEventLink, setOutlookEventLink ] = useState();
  const [gmailEventLink, setGmailEventLink] = useState ();
  const [yahooEventLink, setYahooEventLink] = useState();
  const [officeEventLink, setOfficeEventLink] = useState();


  const AdventNoticeHandler = e =>{
      console.log("button was click")
      setCalendarOptions(true);

      setOutlookEventLink("https://outlook.live.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-15T00%3A00%3A00%2B00%3A00&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-14T23%3A00%3A00%2B00%3A00&subject=Advent%20Reconciliation&location=St Micheal The Archangel");


      setGmailEventLink("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Advent Reconciliation&dates=20221214T230000Z%2F20221215T000000Z");

      setYahooEventLink("https://calendar.yahoo.com/?dur=&et=20221215T000000Z&st=20221214T230000Z&v=60&&title=Advent Reconciliation");


      setOfficeEventLink("https://outlook.office.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-15T00%3A00%3A00%2B00%3A00&path=%2Fcalendar%2Faction%2Fcompose&rru=Advent Reconciliation&startdt=2022-12-14T23%3A00%3A00%2B00%3A00&location=St Micheal The Archangel&subject=Advent Reconciliation");


  }

  // const HDDec900Handler = e =>{
  //   setCalendarOptions(true);

  //   setGmailEventLink("https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221208T150000Z%2F20221208T160000Z&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&text=Holy%20Day%20of%20Obligation" );

  //   setOutlookEventLink("https://outlook.live.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-08T16%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-08T15%3A00%3A00%2B00%3A00&subject=Holy%20Day%20of%20Obligation");

  //   setOfficeEventLink("https://outlook.office.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-08T16%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-08T15%3A00%3A00%2B00%3A00&subject=Holy%20Day%20of%20Obligation");


  //   setYahooEventLink("https://calendar.yahoo.com/?dur=&et=20221208T160000Z&in_loc=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&st=20221208T150000Z&title=Holy%20Day%20of%20Obligation&v=60");

  // }


  // const HDDec1800Handler = e =>{
  //   setCalendarOptions(true);

  //   setGmailEventLink("https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221209T000000Z%2F20221209T010000Z&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&text=Holy%20Day%20of%20Obligation");

  //   setOutlookEventLink("https://outlook.live.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-09T01%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-09T00%3A00%3A00%2B00%3A00&subject=Holy%20Day%20of%20Obligation");

  //   setOfficeEventLink("https://outlook.office.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-09T01%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-09T00%3A00%3A00%2B00%3A00&subject=Holy%20Day%20of%20Obligation");


  //   setYahooEventLink("https://calendar.yahoo.com/?dur=&et=20221209T010000Z&in_loc=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&st=20221209T000000Z&title=Holy%20Day%20of%20Obligation&v=60");

  // }

  const ChristmasMass1700 = e =>{
    setCalendarOptions(true);

    setGmailEventLink("https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221224T230000Z%2F20221225T000000Z&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&text=Christmas%20Mass");

    setOutlookEventLink("https://outlook.live.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-25T00%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-24T23%3A00%3A00%2B00%3A00&subject=Christmas%20Mass");

    setOfficeEventLink("https://outlook.office.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-25T00%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-24T23%3A00%3A00%2B00%3A00&subject=Christmas%20Mass");


    setYahooEventLink("https://calendar.yahoo.com/?dur=&et=20221225T000000Z&in_loc=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&st=20221224T230000Z&title=Christmas%20Mass&v=60");

  }

  const ChristmasMass1200 = e =>{
    setCalendarOptions(true);

    setGmailEventLink("https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221225T060000Z%2F20221225T070000Z&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&text=Christmas%20Mass");

    setOutlookEventLink("https://outlook.live.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-25T07%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-25T06%3A00%3A00%2B00%3A00&subject=Christmas%20Mass");

    setOfficeEventLink("https://outlook.office.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-25T07%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-25T06%3A00%3A00%2B00%3A00&subject=Christmas%20Mass");


    setYahooEventLink("https://calendar.yahoo.com/?dur=&et=20221225T070000Z&in_loc=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&st=20221225T060000Z&title=Christmas%20Mass&v=60");
  }
  const ChristmasMass830 = e =>{
    setCalendarOptions(true);

    setGmailEventLink("https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221225T143000Z%2F20221225T153000Z&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&text=Christmas%20Mass");

    setOutlookEventLink("https://outlook.live.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-25T15%3A30%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-25T14%3A30%3A00%2B00%3A00&subject=Christmas%20Mass");

    setOfficeEventLink("https://outlook.office.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-25T15%3A30%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-25T14%3A30%3A00%2B00%3A00&subject=Christmas%20Mass");


    setYahooEventLink("https://calendar.yahoo.com/?dur=&et=20221225T153000Z&in_loc=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&st=20221225T143000Z&title=Christmas%20Mass&v=60");
  }
  const ChristmasMass1130 = e =>{
    setCalendarOptions(true);

    setGmailEventLink("https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221225T173000Z%2F20221225T183000Z&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&text=Christmas%20Mass");

    setOutlookEventLink("https://outlook.live.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-25T18%3A30%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-25T17%3A30%3A00%2B00%3A00&subject=Christmas%20Mass");

    setOfficeEventLink("https://outlook.office.com/calendar/0/deeplink/compose?allday=false&enddt=2022-12-25T18%3A30%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-25T17%3A30%3A00%2B00%3A00&subject=Christmas%20Mass");


    setYahooEventLink("https://calendar.yahoo.com/?dur=&et=20221225T183000Z&in_loc=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&st=20221225T173000Z&title=Christmas%20Mass&v=60");
    
  }



  return (
    <div className='Announcements-ViewPage'>
      <header>
      <h1>Announcements</h1>
      <p>2</p>
      </header>

      <main>
          <ul>
            <li>
              <header>
                <h2>Advent Reconciliation</h2>
              </header>
                <main>
                <p>Wednesday December 14th 5:00pm</p>
                <button onClick={AdventNoticeHandler}>Add to Calendar</button>
                </main>
            </li>           

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
              <header>
                <h2>Christmas Mass Schedule</h2>
              </header>
              <main>
              <p>Saturday December 24th 5:00 pm</p>
              <button onClick={ChristmasMass1700}>Add to Calendar</button>

              <p>Sunday December 25th 12:00 am</p>
              <button onClick={ChristmasMass1200}>Add to Calendar</button>

              <p>Sunday December 25th 8:30 am</p>
              <button onClick={ChristmasMass830}>Add to Calendar</button>

              <p>Sunday December 25th 11:30 am</p>
              <button onClick={ChristmasMass1130}>Add to Calendar</button>

              </main>
              

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
