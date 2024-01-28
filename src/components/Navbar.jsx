import { useState } from "react";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      id: 1,
      title: "Home",
      slug: "/",
    },
    {
      id: 2,
      title: "Completed",
      slug: "/completed",
    },
    {
      id: 3,
      title: "Archieved",
      slug: "/archieved",
    },
  ];

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-3 mx-4 shadow-[#efefef] sticky top-0 z-20 flex items-center h-20 bg-[#ffffff]">
      <nav>
        <Logo />
      </nav>

      <div onClick={handleMenu} className="ml-auto lg:hidden block ">
        {isMenuOpen ? <RxCross1 size={26} /> : <GiHamburgerMenu size={26} />}
      </div>
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex max-lg:w-full lg:flex-row flex-col items-center ml-auto py-2 lg:py-0 absolute top-20 right-1 lg:static  shadow-lg-[#CBDFCE] rounded lg:shadow-none lg:rounded-none`}
      >
        {navLinks.map((item) => (
          <li key={item.key}>
            <h2 className="inline-block font-semibold px-6 py-2 duration-300 cursor-pointer">
              {item.title}
            </h2>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
