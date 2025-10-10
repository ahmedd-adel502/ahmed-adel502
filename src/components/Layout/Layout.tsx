import { faAddressCard, faFileCode, faMoon, faPhone, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import { useEffect, useState } from "react";
import DevPng from "../../assets/undraw_programming_65t2.svg"

export default function Layout() {

  const {theme, toggleTheme} = useTheme();

  const [active, setActive] = useState('home');

    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
            const handleScroll = () => {
            const y = window.scrollY;
            setScrollY(y);

            if (y <= 500) {
                setActive("home");
            } else if (y > 700 && y <= 1400) {
                setActive("about");
            } else if (y > 1500 && y <= 2000) {
                setActive("skills");
            } else if (y > 2400 && y <= 3400) {
                setActive("projects");
            } else if (y > 4200) {
                setActive("contact");
            }
            };

            window.addEventListener("scroll", handleScroll);
            handleScroll();

            return () => {
            window.removeEventListener("scroll", handleScroll);
            };
        }, []);

        useEffect(() => {
            
        }, [scrollY]);
    
  return <>
     {/* Navbar */}
          <div className="navbar flex justify-around items-center p-2 border-b-2 border-violet-500 dark:border-blue-400  text-white bg-gray-800 backdrop-blur-[30px] bg-opacity-30 fixed w-full top-0 left-0 z-50 transition-colors duration-300">
              <div className="flex items-center gap-2 w-fit lg:ms-24 md:w-[70%]"><img src={DevPng} alt="Dev. Ahmed Adel" className="lg:w-[10%] md:w-[10%] w-[15%]"/><h1 className="text-2xl font-bold text-violet-500 dark:text-blue-400">Dev. Ahmed Adel</h1></div>
              <div className="flex items-center gap-5 justify-around lg:w-[70%]">
                    <ul className="items-center gap-10 *:dark:text-white *:dark:hover:text-blue-400  *:hover:text-violet-600 transition-colors duration-200 hidden lg:flex">
                    <li><a href="#home" onClick={()=>{setActive('home')}} className={`flex ${active==='home' ? "text-violet-700 dark:text-blue-400 before:w-full":''}
                     items-center gap-x-1 font-bold relative  before:absolute before:bg-violet-500 dark:before:bg-blue-400 before:w-0 before:h-[4px] before:bottom-[-5px] before:left-0 before:rounded-md hover:before:w-full before:transition-all hover:before:duration-200 `}> <FontAwesomeIcon className="size-5" icon={faUser} /> <span>Portfolio</span></a></li>
                    <li><a href="#about" onClick={()=>{setActive('about')}} className={`flex ${active==='about' ? "text-violet-700 dark:text-blue-400 before:w-full":''}  items-center gap-x-1 font-bold relative before:absolute before:bg-violet-500 dark:before:bg-blue-400 before:w-0 before:h-[4px] before:bottom-[-5px] before:left-0 before:rounded-md hover:before:w-full before:transition-all hover:before:duration-200`}><FontAwesomeIcon className="size-5" icon={faAddressCard} /> <span>About</span></a></li>
                    <li><a href="#skills" onClick={()=>{setActive('skills')}} className={`flex ${active==='skills' ? "text-violet-700 dark:text-blue-400 before:w-full":''}  items-center gap-x-1 font-bold relative before:absolute before:bg-violet-500 dark:before:bg-blue-400 before:w-0 before:h-[4px] before:bottom-[-5px] before:left-0 before:rounded-md hover:before:w-full before:transition-all hover:before:duration-200`}><FontAwesomeIcon className="size-5" icon={faAddressCard} /> <span>Skills</span></a></li>
                    <li><a href="#projects" onClick={()=>{setActive('projects')}} className={`flex ${active==='projects' ? "text-violet-700 dark:text-blue-400 before:w-full":''}  items-center gap-x-1 font-bold relative before:absolute before:bg-violet-500 dark:before:bg-blue-400 before:w-0 before:h-[4px] before:bottom-[-5px] before:left-0 before:rounded-md hover:before:w-full before:transition-all hover:before:duration-200`}><FontAwesomeIcon className="size-5" icon={faFileCode} /> <span>Projects</span></a></li>
                    <li><a href="#contact" onClick={()=>{setActive('contact')}} className={`flex ${active==='contact' ? "text-violet-700 dark:text-blue-400 before:w-full":''}  items-center gap-x-1 font-bold relative before:absolute before:bg-violet-500 dark:before:bg-blue-400 before:w-0 before:h-[4px] before:bottom-[-5px] before:left-0 before:rounded-md hover:before:w-full before:transition-all hover:before:duration-200`}><FontAwesomeIcon className="size-5" icon={faPhone} /> <span>Contact</span></a></li>
                </ul>
                <span className="pl-2 border-l-2 border-violet-500 dark:border-blue-400">
                    <button onClick={toggleTheme} className="p-2 rounded cursor-pointer text-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        {theme === "dark" ? (
                            <FontAwesomeIcon className="size-5 text-yellow-500" icon={faSun} />
                        ) : (
                            <FontAwesomeIcon className="size-5 text-violet-600" icon={faMoon} />
                        )}
                    </button>
                </span>
              </div>
            </div>
            <Outlet />
            {/* Footer */}
        <footer className=" text-center p-4 border-t-2 border-violet-500 dark:border-blue-400 dark:text-white  fixed bottom-0 left-0 w-full transition-colors duration-300 bg-gray-800 backdrop-blur-[30px] bg-opacity-30 z-50"><p>© 2025 <strong className="dark:text-blue-400 font-bold text-violet-500">Ahmed Adel.</strong> All rights reserved.</p></footer>
  </>
}
