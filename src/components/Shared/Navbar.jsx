/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";

import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink, } from "react-router-dom";


const Navbar = () => {
  const user = false

  const [dropdownOpen, setDropDown] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const imgRef = useRef();
  const dropdownRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== dropdownRef.current && e.target !== imgRef.current) {
      setDropDown(false);
    }
  });
  const handleDropDown = () => {
    setDropDown(!dropdownOpen);
  };


  return (
    <>
      <div className="bg-[#005392] z-50">
        <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-transparent py-2 shadow-md shadow-black/5 md:flex-wrap lg:py-3.5">
          <div className="flex w-full items-center justify-center md:max-w-7xl md:px-12 mx-auto">
            <button
              onClick={() => setCollapse(!collapse)}
              className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0  lg:hidden"
              type="button"
            >
              <FiAlignJustify size={25} />
            </button>

            <div
              className={`!visible ${collapse ? "block" : "hidden"
                } absolute md:static top-14 bg-[#005392] w-full md:w-auto border shadow-xl md:border-none md:shadow-none items-center px-3 lg:!flex lg:basis-auto z-50`}
            >
              <ul className="flex mx-auto flex-col md:flex-row justify-center gap-16 py-3">
                <li>
                  <NavLink to="/adress" className=" text-white  p-1">
                    Контакты
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" className="text-white  p-1">
                    Вопрос/Ответ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="text-white  p-1">
                    Компания
                  </NavLink>
                </li>
                <li>
                  <Link to='/'>
                    <img src="https://i.ibb.co/zQcm2p9/logo.png" alt="" className="w-24" />
                  </Link>
                </li>
                <li>
                  <a href="https://wa.me/77005556677" target="_blank" className="text-white flex items-center p-1">
                    <img src="https://i.ibb.co/VmhKJW2/whatsapp-1.png" alt="" className="w-6 h-4 mr-1" />
                    +7 700 555 66 77
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;