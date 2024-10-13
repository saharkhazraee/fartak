import React from 'react'

export default function UniversityLogos() {
  return (
    <section className="university-logos d-flex-column justify-content-around p-5 bg-body-secondary" dir='rtl'>
      <h2 style={{ textDecoration: "underline 2px green",margin:"20px" }}>
        دانشگاه ها :
      </h2>
      <div className="container d-flex w-100 justify-content-between ">
        <img src="../../public/logo.jpg" alt="University 1"  style={{width:"18%"}}/>
        <img src="../../public/logo.jpg" alt="University 1"  style={{width:"18%"}}/>
        <img src="../../public/logo.jpg" alt="University 1"  style={{width:"18%"}}/>
        <img src="../../public/logo.jpg" alt="University 1"  style={{width:"18%"}}/>
        <img src="../../public/logo.jpg" alt="University 1"  style={{width:"18%"}}/>
        
      </div>
    </section>
  )
}
