import { FiChevronDown } from "react-icons/fi";
const Navbar = () => {
  //FiChevronDown
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

  return (
    <nav className="px-4 bg-white text-white flex py-5 justify-between items-center  ">
      <h1 className="text-3xl flex text-slate-600 ">
        HeroBiz<h1 className="text-sky-400">.</h1>
      </h1>

      <ul className="flex  space-x-8 mr-14   ">
        {navebarcontent.map((item, index) => (
          <div className=" items-center  hover-underline-animation w-30">
            <li className="cursor-pointer text-gray-400 items-center hover:text-sky-400 flex wi pb-3 mt-5 ">
              {item}

              {item === "Home" ||
              item === "Dropdown" ||
              item === "Mega Menu" ? (
                <span className="">
                  <FiChevronDown />
                </span>
              ) : null}
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
