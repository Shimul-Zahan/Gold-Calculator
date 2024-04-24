import React from 'react'
import image from '../../assets/4th address 1.png'

const Adress = () => {
  return (
    <section className='min-h-screen max-w-7xl mx-auto pb-10 px-2 lg:p-10 rounded-xl my-5 bg-[#005697] text-white'>
      <h1 className='py-2 lg:py-10 text-center lg:text-[55px] font-bold'>Контакты</h1>
      <div className='grid w-full lg:grid-cols-5 grid-cols-1 justify-center items-center gap-5'>
        <div className='col-span-2 lg:text-[22px] font-thin px-10 space-y-4 py-5 border-4 border-black bg-white rounded-lg text-black'>
          <div className='flex justify-between items-center'>
            <h1 className='cursor-pointer'>г. Караганда, пр.Бухар <br /> Жырау, д.51/4 <br />
              Тел: 99-63-01</h1>
            <h1>10:00 - 20:00</h1>
          </div>
          <div className='flex justify-between items-center'>
            <h1 className='cursor-pointer'>г. Караганда, мкр. <br /> Гульдер-1, д.3 <br />
              Тел: 33-17-58 </h1>
            <h1>09:00 - 21:00</h1>
          </div>
          <div className='flex justify-between items-center'>
            <h1 className='cursor-pointer'>г. Караганда, <br />
              23 мкр, д.13 <br />
              Тел: 53-79-53</h1>
            <h1>09:00 - 21:00</h1>
          </div>
          <div className='flex justify-between items-center'>
            <h1 className='cursor-pointer'>г. Караганда, ул. <br /> Магнитогорская, д.35 <br />
              Тел: 78-06-21</h1>
            <h1>09:00 - 19:00</h1>
          </div>
        </div>
        <div className='col-span-3'>
          <img src={image} alt="" className='w-full lg:h-[460px]' />
        </div>
      </div>
    </section>
  )
}

export default Adress