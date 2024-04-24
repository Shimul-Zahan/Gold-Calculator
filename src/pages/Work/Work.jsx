import React from 'react'

const Work = () => {
    return (
        <section className='min-h-screen max-w-7xl mx-auto space-y-5 pb-10 px-2 lg:p-10 rounded-xl my-5 bg-[#005697] text-white'>
            <h1 className='py-2 lg:py-10 text-center lg:text-[55px] font-bold'>Вакансии</h1>
            <p className='lg:text-[33px]'>Если у вас есть желание работать в нашей компании присылайте резюме на olga@kzgarant.kz или звоните по тел. (7212) 50-63-07.
            </p>
            <h1 className='lg:text-[33px] py-3'>Эксперт - оценщик</h1>
            <div className='lg:text-[33px]'>
                <h1 className='font-bold'>Обязанности:</h1>
                <ul className="list-disc px-16">
                    <li>Оценка ювелирных изделий из золота</li>
                    <li>Прием залога, выдача краткосрочных микрокредитов</li>
                </ul>
            </div>
            <div className='lg:text-[33px]'>
                <h1 className='font-bold'>Требования:</h1>
                <ul className="list-disc px-16">
                    <li>Средне-специальное или высшее экономическое образование</li>
                    <li>Опыт работы в ломбарде не менее одного года (желательно)</li>
                </ul>
            </div>
            <div className='lg:text-[33px]'>
                <h1 className='font-bold'>Требования:</h1>
                <ul className="list-disc px-16">
                    <li>Оформление согласно Трудовому кодексу Республики Казахстан</li>
                    <li>Официальная заработная плата</li>
                    <li>Оплата отпускных, больничных пособий</li>
                    <li>Отчисления в пенсионный фонд</li>
                    <li>Возможность карьерного роста</li>
                    <li>Проведение корпоративных мероприятий</li>
                    <li>Обучение на месте</li>
                </ul>
            </div>
            <p className='lg:text-[33px]'>Полная занятость, полный день</p>
        </section>
    )
}

export default Work