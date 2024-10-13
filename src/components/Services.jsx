import React from 'react'
import { Gear, Briefcase } from 'react-bootstrap-icons';
export default function Services() {
  const services = [
    { title: 'بورس تحصیلی', description: 'ثبت درخواست و پیگیری مراحل بورس' },
    { title: 'مشاوره تحصیلی', description: 'ویزای تحصیلی انواع رشته و وقاطع بالاتر' },
    { title: 'پشتیبانی', description: 'انجام تمتمی مراحل بورسیه اپلای' },
  ];
  return (
    <section className="services d-flex-column justify-content-around p-5" dir='rtl'>

      <h2 style={{ textDecoration: "underline 2px green", margin: "20px", width: '25%' }} dir='rtl'>خدمات ما :</h2>
      <div className='container d-flex w-100 justify-content-between g-2'>
        {services.map((service, index) => (
          <div key={index} className="service-card p-5 d-flex-column justify-content-center align-items-center w-25"
          style={{ backgroundColor: "purple",textAlign:'center' }}>
            <Gear size={50} color="black" className="m-3" />
            <h3 style={{ textAlign: 'center', color: "white" }}>{service.title}</h3>
            <p style={{ textAlign: 'center' }}>{service.description}</p>
          </div>

        ))}
      </div>
    </section>
  )
}
