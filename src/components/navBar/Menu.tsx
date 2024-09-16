import { useState } from "react";
import LanguagePicker from "./LanguagePicker";
import ThemeSelector from "../themeSelector/ThemeSelector";

type Link = {
  name: string;
  href: string;
};

type Props = {
  links: Link[];
  locale?: string;
};

const Menu = ({ links = [], locale }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Button mobile menu */}
      <div className="md:hidden">
        <button
          className="text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Menu (mobil and desktop) */}
      <ul
        className={`absolute font-semibold text-xl shadow-md md:shadow-none dark:shadow-black/70 md:relative bg-gray-800 bg-white dark:bg-slate-900 left-0 right-0 top-16 md:top-auto px-4 py-2 md:flex md:space-x-4 ${
          isMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.href} className="block dark:text-gray-100 px-2 py-1">
              {link.name}
            </a>
          </li>
        ))}
        <li className="flex justify-center items-center my-3 md:my-0">
          <div className="flex justify-center items-center gap-10 md:gap-5 ">
            <LanguagePicker locale={locale} />
            <ThemeSelector />
          </div>
        </li>
      </ul>
    </>
  );
};

export default Menu;
