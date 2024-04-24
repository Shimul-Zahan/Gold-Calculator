import React from 'react'
import image from '../../assets/Lic_ru 1.png'

const About = () => {
    return (
        <section className='min-h-screen max-w-7xl mx-auto space-y-5 pb-10 px-2 lg:p-10 rounded-xl my-5 bg-[#005697] text-white'>
            <h1 className='py-2 lg:py-10 text-center lg:text-[55px] font-bold'>Компания</h1>
            <div>
                <h1 className='lg:text-[33px] font-bold my-10'>Как получить микрокредит в Ломбард Гарант KZ?</h1>
                <p className='lg:text-[30px] font-thin'>ТОО «Ломбард Гарант KZ» на финансовом рынке Казахстана работает с февраля 2011 года. <br /> <br />

                    За этот период «Ломбард Гарант KZ» зарекомендовал себя в глазах сотен тысяч людей по всей республике как доступное, надежное и современное предприятие краткосрочного микрокредитования. <br /> <br />

                    Сегодня «Ломбард Гарант KZ» - это крупное финансовое предприятие, насчитывающее более 149 приемных пунктов в 56 городах и поселках Казахстана.

                </p>
            </div>
            <div>
                <h1 className='lg:text-[33px] font-bold my-10'>Лицензия на осуществление микрофинансовой деятельности № 09.21.0033.Л</h1>
                <p className='lg:text-[30px] font-thin'>Выдана 25.03.2021 г. Управлением региональных представителей в г.Караганда Агентства Республики Казахстан по регулированию и развитию финансовых рынков
                </p>
            </div>
            <img src={image} alt=""  className='mx-auto py-10'/>
        </section>
    )
}

export default About