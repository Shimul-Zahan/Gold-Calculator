import React, { useState } from 'react'
import image1 from '../../assets/addresses/addresses/1st address.png'
import image2 from '../../assets/addresses/addresses/2nd address.png'
import image3 from '../../assets/addresses/addresses/3rd address.png'
import image4 from '../../assets/addresses/addresses/4th address.png'

const Adress = () => {

  const [click, setClick] = useState(1);

  return (
    <section className='min-h-screen max-w-7xl mx-auto pb-10 px-2 lg:p-10 rounded-xl my-5 bg-[#005697] text-white'>
      <h1 className='py-2 lg:py-10 text-center lg:text-[55px] font-bold'>Контакты</h1>
      <div className='grid w-full lg:grid-cols-5 grid-cols-1 justify-center items-center gap-5'>
        <div className='col-span-2 lg:text-[21px] px-10 space-y-4 py-5 border-4 border-black bg-white rounded-lg text-black'>
          <div className='flex justify-between items-center'>
            <h1 onClick={() => setClick(1)} className='cursor-pointer '>г. Караганда, пр.Бухар <br /> Жырау, д.51/4 <br />
              Тел: 99-63-01</h1>
            <h1>10:00 - 20:00</h1>
          </div>
          <div className='flex justify-between items-center'>
            <h1 onClick={() => setClick(2)} className='cursor-pointer'>г. Караганда, мкр. <br /> Гульдер-1, д.3 <br />
              Тел: 33-17-58 </h1>
            <h1>09:00 - 21:00</h1>
          </div>
          <div className='flex justify-between items-center'>
            <h1 onClick={() => setClick(3)} className='cursor-pointer'>г. Караганда, <br />
              23 мкр, д.13 <br />
              Тел: 53-79-53</h1>
            <h1>09:00 - 21:00</h1>
          </div>
          <div className='flex justify-between items-center'>
            <h1 onClick={() => setClick(4)} className='cursor-pointer'>г. Караганда, ул. <br /> Магнитогорская, д.35 <br />
              Тел: 78-06-21</h1>
            <h1>09:00 - 19:00</h1>
          </div>
        </div>
        <div className='col-span-3'>
          {
            click === 1 && <img src={image1} alt="" className='w-full lg:h-[460px]' />
          }
          {
            click === 2 && <img src={image2} alt="" className='w-full lg:h-[460px]' />
          }
          {
            click === 3 && <img src={image3} alt="" className='w-full lg:h-[460px]' />
          }
          {
            click === 4 && <img src={image4} alt="" className='w-full lg:h-[460px]' />
          }
        </div>
      </div>
    </section>
  )
}

export default Adress