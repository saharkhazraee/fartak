import React from 'react'

export default function About() {
  return (
    <section className="about d-flex justify-content-around p-5 bg-black " style={{ color: "white" }} dir='rtl'>
      <h2 dir='rtl' style={{ textDecoration: "underline 2px green",margin:"20px" }}>درباره ما:</h2>
      <p className='w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore, et minus vitae at, ducimus nesciunt numquam est suscipit magni quibusdam alias dolor iste! Eveniet, quia consectetur dolor sint molestias, beatae eum dicta quidem magni fugiat
       consequuntur ducimus doloribus illo quas voluptatem asperiores ullam placeat sequi? Aut enim et sint.</p>
      <div className='d-flex-column '>
        <h3>
          ایده مقصد دوم
        </h3>
        <h1 style={{ color: 'purple' }}>
          فرتاک
        </h1>
      </div>
    </section>
  )
}
