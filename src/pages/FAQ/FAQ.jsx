import React from 'react'

const FAQ = () => {
  return (
    <section className='min-h-screen max-w-7xl mx-auto space-y-5 pb-10 px-2 lg:p-10 rounded-xl my-5 bg-[#005697] text-white'>
      <h1 className='py-2 lg:py-10 text-center lg:text-[55px] font-bold'>Вопрос/Ответ</h1>
      <div>
        <h1 className='lg:text-[33px] font-bold'>Как получить микрокредит в Ломбард Гарант KZ?</h1>
        <p className='lg:text-[33px] px-5'>Если у вас есть желание работать в нашей компании присылайте резюме на olga@kzgarant.kz или звоните по тел. (7212) 50-63-07.
        </p>
      </div>
      <div>
        <h1 className='lg:text-[33px] font-bold'>Что выгодно отличает ТОО «Ломбард Гарант KZ» от других ломбардов?</h1>
        <div className='lg:text-[33px] px-5 flex justify-start gap-1 items-start'>
          <p>1.</p>
          <p>В «Ломбард Гарант KZ» можно получить микрокредит не только под золотые изделия, но так же под другое имущество, тогда как другие ломбарды выдают микрокредиты только под залог золота.
          </p>
        </div>
        <div className='lg:text-[33px] px-5 flex justify-start gap-1 items-start py-1'>
          <p>2.</p>
          <p>У нас нет ограничений по выдаваемой сумме — если клиенту нужно 1 млн. тенге и у него есть залоговое имущество на эту сумму — он ее получит.
          </p>
        </div>
      </div>
      <div>
        <h1 className='lg:text-[33px] font-bold'>Как я могу узнать свою задолженность по микрокредиту на сегодня?</h1>
        <div className='lg:text-[33px] px-5 flex justify-start gap-1 items-start'>
          <p>1.</p>
          <p>Задолженность по микрокредиту можно узнать позвонив по номеру телефона отделения в котором Вы обслуживались (телефон можно посмотреть  в залоговом билете, на сайте воспользовавшись услугой «проверить задолженность»
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ