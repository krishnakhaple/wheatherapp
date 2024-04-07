import React, { useState } from 'react'
import './Wheatherapp.css'
import clearicon from '../Assets/clear.png'
import cloudicon from                      '../Assets/cloud.png'
import  drizzleicon from                     '../Assets/drizzle.png'
import  humidityicon from                     '../Assets/humidity.png'
import rainicon  from                      '../Assets/rain.png'
import  searchicon from                     '../Assets/search.png'
import   snowicon from                    '../Assets/snow.png'
import   windicon from                    '../Assets/wind.png'


//'../Assets/wind.png'
 const Wheatherapp = () => {
    let api_key="12b83931bec39e82ec487fbc6d19f51e";

    const[wicon,setwicon]=useState(cloudicon);

    const element=document.getElementsByClassName("cityinput");
    const search=async()=>{
    

    if(element[0].value==="")
    {
        return 0;
    }
    
    let Url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response=await fetch(Url);

    let data=await response.json();

    console.log(data)


    
    const humidity=document.getElementsByClassName("humiditypercentage");
    const wind=document.getElementsByClassName("windrate");
    const temperature=document.getElementsByClassName("wheathertemp");
    const location=document.getElementsByClassName("wheatherloaction");
    
    humidity[0].innerHTML=data.main.humidity+" %";
    wind[0].innerHTML=data.wind.speed+" km/h";
    temperature[0].innerHTML=data.main.temp+" °C";
    location[0].innerHTML=data.name;




    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
        setwicon(clearicon)
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
    {
        setwicon(cloudicon)
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
    {
        setwicon(drizzleicon)
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
    {
        setwicon(drizzleicon)
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
    {
        setwicon(rainicon)
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
    {
        setwicon(rainicon)
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
    {
        setwicon(snowicon)
    }
    else
    {
        setwicon(clearicon);
    }

    }




    const handlekeypress=(e)=>{
        if(e.key==='Enter')
        {
            search();
            element[0].value="";
        }
        else if(e.type==='click')
        {
            search();
            element[0].value="";
        }

    }
  return (
    <div className='container'>
      <div className="topbar">
         <input type="text" className="cityinput" placeholder="search"  onKeyDown={handlekeypress}/>
          <div className="search-icon">
              <img src={searchicon} alt="" onClick={handlekeypress}/>   

          </div>
      </div>
       <div className="wheatherimage">
        <img src={wicon} alt=""/>
       </div>
       <div className="wheathertemp">45°c</div>
       <div className="wheatherloaction">London</div>
       <div className="datacontainer">
          <div className="element">
           <img src={humidityicon} alt="" className="icon"/>
              <div className="data">
                  <div className="humiditypercentage">64%</div>
                  <div className="text">humidity</div>
              </div>
          </div>



          <div className="element">
           <img src={windicon} alt="" className="icon"/>
              <div className="data">
                  <div className="windrate">18km/h</div>
                  <div className="text">windspeed</div>
              </div>
          </div>


       </div>
    </div>
  )
}

export default Wheatherapp;
