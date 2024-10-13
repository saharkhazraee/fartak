import React from 'react'

export default function UniversityCards() {
  const universities = [
    {
      name: 'دانشگاه آلبرتا ',
      description: 'دانشگاه آلبرتا به عنوان یکی از بهترین دانشگاه‌های کانادا شناخته می‌شود و در بسیاری از رتبه‌بندی‌های بین‌المللی در جایگاه‌های برتر قرار دارد. این دانشگاه با ارائه برنامه‌های متنوع در مقاطع کارشناسی، کارشناسی ارشد و دکترا، فرصت‌های تحصیلی بسیاری را برای دانشجویان داخلی و بین‌المللی فراهم کرده است.',
      image: 'bg.jpg'
    },
    {
      name: 'دانشگاه کراندال',
      description: 'ک دانشگاه خصوصی و مسیحی است که در شهر مونکتون، استان نیوبرانزویک، کانادا واقع شده است. این دانشگاه که به عنوان یکی از برجسته‌ترین مؤسسات آموزشی مسیحی در منطقه آتلانتیک کانادا شناخته می‌شود،',
      image: 'bg.jpg'
    },
    {
      name: 'دانشگاه رایرسون', description: 'ه اخیراً نام خود را به دانشگاه تورنتو متروپولیتن (Toronto Metropolitan University - TMU) تغییر داده است، یکی از معتبرترین دانشگاه‌های کانادا و واقع در شهر تورنتو، استان انتاریو است. این دانشگاه به خاطر تمرکز بر یادگیری عملی، پژوهش‌های نوآورانه و برنامه‌های تحصیلی متنوع و مرتبط با بازار کار شناخته می‌شود.',
      image: 'bg.jpg'
    },
    // Add more as needed
  ];
  return (
    <section style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", width: "80%", margin: '50px auto' }}>
      <h2 style={{ textDecoration: "underline 2px green", width: '100%', marginBottom: "20px" }} dir='rtl'>گزیده مقالات</h2>
      <div className="university-cards" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        {universities.map((uni, index) => (
          <div key={index} className="university-card" style={{ width: "30%",backgroundColor:"lightgray",height:"550px" }}>
            <img src={'../../public/bg.jpg'} alt={uni.name} style={{ display: "inline-block", width: "100%", height: "50%" }} />
            
              <h3 dir='rtl' style={{padding:"20px 20px 0 0"}}>{uni.name}</h3>
              <p dir='rtl' style={{padding:"20px 20px 0 20px",textAlign:"justify"}}>{uni.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  )
}
