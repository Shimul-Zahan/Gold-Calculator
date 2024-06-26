import { useState } from "react";

const Banner = () => {

  const [active, setActive] = useState(1);
  const [low, setLow] = useState(1)
  const [rp, setRp] = useState(21350)
  const [value, setValue] = useState(0);
  const [click, setClick] = useState(false)

  console.log(click);


  return (
    <>
      <div className="max-w-[1200px] font-sans mx-auto justify-between mb-[60px] border mt-5 lg:mt-[10px] bg-[#005392] rounded-2xl">
        <div className="flex flex-wrap mt-14">
          <div className="p-5 md:w-[40%]">
            <div className="text-left mb-[40px] border-4 rounded-2xl py-2 px-3 bg-[#005392]">
              <h3 className="text-[24px] lg:text-[35px] text-white font-medium capitalize">
                Ломбард Гарант KZ - сеть ломбардов в Казахстане
              </h3>
            </div>
          </div>
          <div className="p-5 text-white  md:w-[60%] w-full">
            <div className="mb-[40px] border-4 rounded-2xl px-3 bg-[#005392] py-2">
              <p className="lg:text-[40px] text-[20px] text-center">
                Рассчитать с высокой оценкой
              </p>
              <div className="flex justify-center items-center gap-8 md:gap-16 lg:px-9 px-2">
                <div>
                  {active === 1 && (
                    <div className="">
                      <span className="lg:text-[40px] text-[20px] font-bold">21 350</span>
                      <small>₸</small>
                    </div>
                  )}
                  {active === 2 && (
                    <div className="">
                      <span className="lg:text-[40px] text-[20px] font-bold">27 370</span>
                      <small>₸</small>
                    </div>
                  )}
                  {active === 3 && (
                    <div className="">
                      <span className="lg:text-[40px] text-[20px] font-bold">36 450</span>
                      <small>₸</small>
                    </div>
                  )}
                  {active === 4 && (
                    <div className="">
                      <span className="lg:text-[40px] text-[20px] font-bold">11 350</span>
                      <small>₸</small>
                    </div>
                  )}
                </div>

                <div className="lg:text-[53px]">x</div>

                <div>
                  <div className="flex justify-center items-end">
                    <input type="text" onClick={() => setClick(true)} onChange={(e) => setValue(e.target.value)} name="" id="" className=" lg:w-32 w-16 bg-transparent border border-t-0  font-bold border-l-0 border-r-0 outline-none text-center lg:text-[40px]" placeholder={click ? "" : "0"} />
                    <h1 className="text-xl">rp</h1>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-5 lg:gap-0 lg:py-0 lg:justify-between items-center lg:max-w-[400px] lg:mx-32 -mt-2 mb-2 py-2">
                <p className="lg:text-lg ">цена за 1 гр</p>
                <p className="lg:text-lg">весизделия</p>
              </div>
              <div>
                {/* new */}
                <div className="flex justify-between items-center lg:max-w-[450px] lg:mx-16">
                  <ul className="text-[15px] py-1 flex justify-start items-center gap-2 text-white px-1">
                    Проба:
                    <li>
                      <button onClick={() => { setActive(1), setRp(21350) }} className={`${active === 1 ? 'text-black bg-white px-1' : ''}`}>585</button>
                    </li>
                    <li>
                      <button onClick={() => { setActive(2), setRp(27370) }} className={`${active === 2 ? 'text-black bg-white px-1' : ''}`}>750</button>
                    </li>
                    <li>
                      <button onClick={() => { setActive(3), setRp(36450) }} className={`${active === 3 ? 'text-black bg-white px-1' : ''}`}>999</button>
                    </li>
                    <li>
                      <button onClick={() => { setActive(4), setRp(11350) }} className={`${active === 4 ? 'text-black bg-white px-1' : ''}`}>333</button>
                    </li>
                  </ul>
                  <ul className="text-[15px] py-1 flex justify-start items-center gap-2 text-white px-1">
                    Лом:
                    <li>
                      <button onClick={() => setLow(1)} className={`${low === 1 ? 'text-black bg-white px-1' : ''}`}>да</button>
                    </li>
                    <li>
                      <button onClick={() => setLow(2)} className={`${low === 2 ? 'text-black bg-white px-1' : ''}`}>нет</button>
                    </li>
                  </ul>
                </div>
              </div>
              {
                low === 1 && <h1 className="text-center"><span className=" lg:text-[50px] font-semibold">{value * rp}</span><small>₸</small></h1>
              }
              {
                low === 2 && <h1 className="text-center"><span className=" lg:text-[50px] font-semibold">{value * rp * 0.8}</span><small>₸</small></h1>
              }
            </div>
          </div>
        </div>
        <div className="flex justify-between text-white -mt-36">
          <div className="mb-4 lg:mb-0 lg:mr-12 lg:w-1/2 lg:px-12 px-4">
            <div className="w-full lg:w-32 mt-32">
              просмотр статуса залога
              <img src="https://i.ibb.co/gyhq5jY/white-arrow.png" alt="" />
            </div>
          </div>
          <div className="relative xl:-right-28 md:-bottom-12 -bottom-16 mt-4 overflow-x-hidden">
            <img src="https://i.ibb.co/rGw3FD1/Cash-Counter-image.png" alt="" className="w-56 xl:w-80" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
