import React, {useState}from 'react'

function Announcements(props) {

  const [calendarOptions, setCalendarOptions] = useState(false);

  const [outlookEventLink, setOutlookEventLink ] = useState();
  const [gmailEventLink, setGmailEventLink] = useState ();
  const [yahooEventLink, setYahooEventLink] = useState();
  const [officeEventLink, setOfficeEventLink] = useState();



  const AddToCalender = e =>{

    console.log(e.target.id)

    setCalendarOptions(false);

  if(e.target.id === "HolyLandDiscovery"){
    setCalendarOptions(true);

    setGmailEventLink("https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230210%2F20230218&details=Holy%20Land%20Discovery%20-%20Faith-Based%20Travel%20%0AFebruary%2010%20-%2017%2C%202023%0APrices%20start%20at%20%241819%20per%20person%20based%20on%20double%20occupancy%20%0APlease%20see%20Trip%20Details%20-%20Catholic%20Cruises%20and%20Tours%20%0A%28vacationport.net%29%20or%20Call%20Brian%20at%20Catholic%20Cruises%20and%20Tours%20%0Aat%20860-399-1785%20for%20more%20information.&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&text=Holy%20Land%20Discovery");

    setOutlookEventLink("https://outlook.live.com/calendar/0/deeplink/compose?allday=true&body=Holy%20Land%20Discovery%20-%20Faith-Based%20Travel%20%0AFebruary%2010%20-%2017%2C%202023%0APrices%20start%20at%20%241819%20per%20person%20based%20on%20double%20occupancy%20%0APlease%20see%20Trip%20Details%20-%20Catholic%20Cruises%20and%20Tours%20%0A%28vacationport.net%29%20or%20Call%20Brian%20at%20Catholic%20Cruises%20and%20Tours%20%0Aat%20860-399-1785%20for%20more%20information.&enddt=2023-02-18T06%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-02-10T06%3A00%3A00%2B00%3A00&subject=Holy%20Land%20Discovery");

    setOfficeEventLink("https://outlook.office.com/calendar/0/deeplink/compose?allday=true&body=Holy%20Land%20Discovery%20-%20Faith-Based%20Travel%20%0AFebruary%2010%20-%2017%2C%202023%0APrices%20start%20at%20%241819%20per%20person%20based%20on%20double%20occupancy%20%0APlease%20see%20Trip%20Details%20-%20Catholic%20Cruises%20and%20Tours%20%0A%28vacationport.net%29%20or%20Call%20Brian%20at%20Catholic%20Cruises%20and%20Tours%20%0Aat%20860-399-1785%20for%20more%20information.&enddt=2023-02-18T06%3A00%3A00%2B00%3A00&location=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-02-10T06%3A00%3A00%2B00%3A00&subject=Holy%20Land%20Discovery");


    setYahooEventLink("https://calendar.yahoo.com/?desc=Holy%20Land%20Discovery%20-%20Faith-Based%20Travel%20%0AFebruary%2010%20-%2017%2C%202023%0APrices%20start%20at%20%241819%20per%20person%20based%20on%20double%20occupancy%20%0APlease%20see%20Trip%20Details%20-%20Catholic%20Cruises%20and%20Tours%20%0A%28vacationport.net%29%20or%20Call%20Brian%20at%20Catholic%20Cruises%20and%20Tours%20%0Aat%20860-399-1785%20for%20more%20information.&dur=allday&et=20230218&in_loc=448%20State%20Line%20Rd%20Oak%20Grove%20KY%2042262&st=20230210&title=Holy%20Land%20Discovery&v=60");
  }
  
  



  }


 

  return (
    <div className='Announcements-ViewPage'>
      <header>
      <h1>Parish Events</h1>
      <p>4</p>
      </header>

      <main>
          <ul>

              <li>
              <header>
                <h2>Holy Land Discovery</h2>
                <p>February 10-17, 2023</p>
              </header>
              <main>
                <p>Holy Land Discovery - Faith-Based Travel February 10 - 17, 2023 Prices start at $1819 per person based on double occupancy Please see Trip Details - Catholic Cruises and Tours (vacationport.net) or Call Brian at Catholic Cruises and Tours at 860-399-1785 for more information.</p>
                <button id="HolyLandDiscovery" onClick={AddToCalender}>Add to Calendar</button>
              </main>
              </li>

              <li>
                <header>
                <h2>CCD</h2>
                <p>Every Sunday at 10:00 AM</p>
                </header>
              </li>


              <li>
              <header>
              <h2>RCIA</h2>
              <p>Every Wednesday at 7:00 PM</p>
              </header>
              </li>

              
              <li>
              <header>
              <h2>Pray Group</h2>
              <p>Every Tuesday 9:00 AM</p>
              </header>


              <main>
                <p>All are welcome to come join the Prayer Group. Prayer Group meet in the church.</p>
              </main>
              </li>

            
          </ul>

        

      </main>

      <aside style={{display: calendarOptions ? "grid" : "none",
                    left: calendarOptions ? "0px" : "-300px",
                    }}>

                <h2>Selected your calender</h2>

              
                <a href={outlookEventLink} onClick={AddToCalender} title="Save Event in my Calendar" target="blank">Outlook
                </a>

                <a href={gmailEventLink} onClick={AddToCalender}  title="Save Event in my Calendar" target="blank">Gmail
                </a>

                <a href={yahooEventLink} onClick={AddToCalender} title="Save Event in my Calendar" target="blank">Yahoo
                </a>

                <a href={officeEventLink} onClick={AddToCalender} title="Save Event in my Calendar" target="blank">Office
                </a>

          <button  onClick={AddToCalender} > close</button>


                
          </aside>

    </div>
  )
}


export default Announcements
