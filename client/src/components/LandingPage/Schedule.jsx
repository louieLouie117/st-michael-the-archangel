import React, {useState, useEffect}from 'react'


function MainSchedule(props) {

  const [sunday, setSunday ] = useState(false);
  const [tuesday, setTuesday ] = useState(false);
  const [mTHFri, setMTHFri ] = useState(false);
  const [wednesday, setWednesday ] = useState(false);
  const [saturday, setSaturday ] = useState(false);


  

  useEffect(() =>{
    changeBackground();
  }, [])


  const changeBackground = e => {
    
      let todayDate = Date.now();

      const longFormate = {
        weekday: "long",
    };

    let today = new Date(todayDate).toLocaleDateString("en-US", longFormate);

      console.log("Todays date", today)

      if(today === "Sunday"){
        setSunday(true);  
        setMTHFri(false);
        setTuesday(false); 
        setWednesday(false);    
        setSaturday(false);    

        console.log("change background Colors of Sunday");
      
      }


      if(today === "Monday" || today === "Thursday" || today === "Friday" ){
        setSunday(false);  
        setMTHFri(true);
        setTuesday(false); 
        setWednesday(false);    
        setSaturday(false);    

        console.log("change background Colors of M TH Fri");
      
      }

         
      if(today === "Tuesday"){
        setSunday(false);  
        setMTHFri(false);
        setTuesday(true); 
        setWednesday(false);    
        setSaturday(false);    

        console.log("change background Colors of Tuesday");
      
      }


      if(today === "Wednesday"){
        setSunday(false);  
        setMTHFri(false);
        setTuesday(false); 
        setWednesday(true);    
        setSaturday(false);    

        console.log("change background Colors of Wednesday");
      
      }

      
      if(today === "Saturday"){
        setSunday(false);  
        setMTHFri(false);
        setTuesday(false); 
        setWednesday(false);    
        setSaturday(true);    

        console.log("change background Colors of Saturday");
      
      }
  }





  return (
    <div className='Schedule-Component'>
      <header>
        <h1>We invite you to join us and live a sacramental life.</h1>
      </header>
      <main>
        <section>
            <h2>Mass Schedule</h2>
            <ul className='Schedule-Container'>
              
              <li>
              <div style={{
                      background: sunday ? "#79A27D" : "white",
                      color: sunday ? "white" : "black",
                      width: sunday ? "5px" : "5px",
                      height: sunday ? "100%" : "100%"
                      }}></div>
                
                <p>Sunday</p> 
                <p>8:30 AM | 11:30 AM</p>
                </li>

              <li>
              <div style={{
                      background: mTHFri ? "#79A27D" : "white",
                      color: mTHFri ? "white" : "black",
                      width: mTHFri ? "5px" : "5px",
                      height: mTHFri ? "100%" : "100%"
                      }}></div>
                
                <p>M, Th, Fri</p> 
                
                <p>9:00 AM</p>
                
                </li>

              <li>
              <div style={{
                      background: tuesday ? "#79A27D" : "white",
                      color: tuesday ? "white" : "black",
                      width: tuesday ? "5px" : "5px",
                      height: tuesday ? "100%" : "100%"
                      }}></div>

                <p>Tuesday</p>
                 <p>No Mass</p>
                 
                 </li>

              <li>
                <div style={{
                      background: wednesday ? "#79A27D" : "white",
                      color: wednesday ? "white" : "black",
                      width: wednesday ? "5px" : "5px",
                      height: wednesday ? "100%" : "100%"
                      }}></div>

                      <p>Wednesday</p> 
                      <p>6:00 PM</p>
                      </li>

              <li> <div style={{
                      background: saturday ? "#79A27D" : "white",
                      color: saturday ? "white" : "black",
                      width: saturday ? "5px" : "5px",
                      height: saturday ? "100%" : "100%"
                      }}></div><p>Saturday</p> <p>5:00 PM</p></li>


            </ul>
        </section>

        <section>
            <h2>Adoration</h2>
            <ul className='Schedule-Container'>
           
              <li> <div></div><p>Friday</p> <p>10:00 AM - 11:00 AM</p></li>

            </ul>
        </section>

        <section>
            <h2>Confession</h2>
            <ul className='Schedule-Container'>
              <li> <div></div><p>Saturday</p> <p>4:30 PM</p></li>
              <li> <div></div><p>Or by Appointment</p> <p>.</p></li>
            </ul>
        </section>
      </main>
      <footer></footer>
    </div>
  )
}


export default MainSchedule
