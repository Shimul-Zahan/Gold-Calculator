
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-[#005392] font-sans">
      <div className="flex flex-col items-start justify-center gap-5 bg-[#005392] text-white p-10 py-10 md:flex-row md:gap-64 md:items-center">
        <aside className="text-xl">
          <img src="https://i.ibb.co/zQcm2p9/logo.png" alt="" />
          <p className="text-[15px] w-72">
            Лицензия на осуществление микрофинансовой деятельности №
            09.21.0033.Л от 25.03.2021 г
          </p>
          <p className="text-[15px]">Ломбард Гарант KZ © 2024</p>
        </aside>
        <nav className="text-lg">
          <ul className="space-y-3">
            <div className="">
              Узнать задолженность
            </div>
            <div className="flex gap-4 px-3 text-xs">
              <Link to='/work'>Работа у нас</Link>
              <Link to='/adress'>Контакты</Link>
            </div>
            <div className="flex gap-4 px-3 text-xs">
              <Link to='/about'>О компании</Link>
              <Link to='/faq'>Вопрос/Ответ</Link>
            </div>
          </ul>
        </nav>
        <nav className="text-lg">
          <ul className="space-y-3">
            <li>
              <a href="https://wa.me/77005556677" target="_blank" className="text-white flex items-center  p-1">
                <img
                  src="https://i.ibb.co/VmhKJW2/whatsapp-1.png"
                  alt=""
                  className="w-6 h-4  mr-1"
                />
                +7 700 555 66 77
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
