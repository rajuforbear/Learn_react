"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
const Navbar = () => {
  const [isHoveringmouse, setHoveringMouse] = useState<boolean>();
  const navebarcontent = [
    "Home",
    "About",
    "Servieces",
    "PortFolio",
    "Team",
    "Blog",
    "Mega Menu",
    "Dropdown",
    "Contact",
  ];

  const home1 = ["Home1", "Home2", "Home3", "Home4"];
  const home2 = ["Home11", "Home21", "Home31", "Home41"];
  const listHome = () => {
    return home1.map((item, index) => (
      <li className=" text-gray-400  w-32 pl-4 py-3 hover:bg-sky-500">
        {item}
      </li>
    ));
  };
  const handleOnHovering = (index:number) => {
     setHoveringMouse(true)
  };
  const handleMouseOut = (index:number) => {
    setHoveringMouse(false);
  };

  return (
    <nav className="px-4 bg-white text-white flex py-2 justify-between items-center  ">
      <h1 className="text-3xl flex text-slate-600 ">
        HeroBiz<h1 className="text-sky-400">.</h1>
      </h1>

      <ul className="flex  space-x-2  mr-32">
        {navebarcontent.map((item, index) => (
          <li className="cursor-pointer text-gray-400   hover:text-sky-400   ">
            {item === "Home" || item === "Dropdown" || item === "Mega Menu" ? (
              <div
                onMouseOver={() => handleOnHovering(index)}
                onMouseOut={() => handleMouseOut(index)}
                className="hover:bg-slate-800 hover:text-white"
              >
                <div className="flex px-5 py-4 ">
                  {item}

                  <span className="pt-1 l-1">
                    <FiChevronDown />
                  </span>
                </div>
                {isHoveringmouse ? (
                  <ul className="absolute  bg-slate-800   ">
                    {item === "Home" ? listHome() : null}
                  </ul>
                ) : null}
              </div>
            ) : (
              <div className="flex  hover-underline-animation px-5 py-4">
                {item}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
