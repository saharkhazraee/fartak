import React from 'react'
import bgImage from "../../public/bg.jpg"
export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` ,height:"80vh"}}>
      <div className="overlay pt-5" dir='rtl' >
        <h1 style={{color:"purple"}}><span style={{color:"white"}}>یک</span> مشاور خوب <br/>
          <span style={{color:"green"}}>ارزشمند</span> است</h1>
        {/* <p>Your journey to academic success starts here.</p> */}
        <button className='btn' style={{backgroundColor:"purple",color:"white",padding:"30px",marginTop:"30px"}}>مشاور و ارزیابی</button>
      </div>
    </section>
  )
}
