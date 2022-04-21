 
import React, { useEffect, useState }  from 'react';

 import './covid.css'
 
const Covid = () => {
    const [data,setData]=useState([]);
    const getCovidData=async()=>{
      try{
        const res= await fetch('https://data.covid19india.org/data.json');
        const data=await res.json();
        console.log(data.statewise);
        setData(data.statewise[0]);

      }
      catch(err){
        console.log(err)
      }
    }
    useEffect(() => {
          getCovidData();
      },[])
    
  return (
      <>
      <section>
         <h2>🔴 LIVE</h2> 
       <h1>COVID-19 CORONAVIRUS TRACKER</h1>
       <ul>
         <li className="card">
              <div className="card_main card_color1">
                  <div className="card_inner">
                      <p className='card_name'><span>OUR</span> Country</p>
                      <p className='card_total card_small'>INDIA</p>
                  </div>
              </div>
              <div className="card_main card_colorR">
                  <div className="card_inner">
                      <p className='card_name'><span>TOTAL</span> DEATH</p>
                      <p className='card_total card_small'>{data.deaths}</p>
                  </div>
              </div>
         </li>
         <li className="card">
              <div className="card_main card_color2">
                  <div className="card_inner">
                      <p className='card_name'><span>TOTAL</span> RECOVERED</p>
                      <p className='card_total card_small'>{data.recovered}</p>
                  </div>
              </div>
              <div className="card_main card_color3">
                  <div className="card_inner">
                      <p className='card_name'><span>TOTAL</span>ACTIVE</p>
                      <p className='card_total card_small'>{data.active}</p>
                  </div>
              </div>
         </li>
         <li className="card">
              <div className="card_main card_colorD">
                  <div className="card_inner">
                      <p className='card_name'><span>TOTAL</span> CONFIRMED</p>
                      <p className='card_total card_small'>{data.confirmed}</p>
                  </div>
              </div>
              <div className="card_main card_color1">
                  <div className="card_inner">
                      <p className='card_name'><span>LAST</span> UPDATE</p>
                      <p className='card_total card_small'>{data.lastupdatedtime}</p>
                  </div>
              </div>
         </li>
       </ul>
      </section>
      </>
      )
}
export default Covid;
