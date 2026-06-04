import assets from '@/assets/assets'
import 'react'
import { useState } from 'react'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"

const Navbar = ({theme, setTheme}) => {
    const [sidebar, setSidebar] = useState(false)
  return (
    <motion.nav initial={{opacity:0 ,y:-50 }} animate={{opacity:1 , y:0 }} transition={{duration:0.6 , ease:'easeOut'}}
    className="w-full flex px-4 justify-between items-center 
    sm:px-12 lg:px-24 py-4 xl:px-40 sticky top-0 z-50 bg-white/50 font-medium 
     backdrop-blur-xl dark:bg-gray-900/70">
        {/* Logo */}
        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="Logo" />
        
        {/* Navigation Links */}

        <div className={`dark:text-white sm:text-sm max-sm:fixed top-0 
        bottom-0 right-0 max-sm:min-h-screen
        max-sm:h-full max-sm:flex-col max-sm:bg-primary
         max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all 
          text-gray-700 ${!sidebar ? 'overflow-hidden max-sm:w-0' : 'max-sm:w-60 max-sm:pl-10'}`}>
               {/* close button in mobile */}
            <img src={assets.close_icon} alt="Close" className='w-5
              hover:cursor-pointer  absolute right-4 top-4 sm:hidden ' onClick={()=> setSidebar(false)} />
            <a onClick={()=> setSidebar(false)} href="#home" className="mx-4  sm:hover:border-b dark:text-gray-200">Home</a>
            <a onClick={()=> setSidebar(false)} href="#services" className="mx-4  sm:hover:border-b dark:text-gray-200">Services</a>
            <a onClick={()=> setSidebar(false)} href="#work" className="mx-4  sm:hover:border-b dark:text-gray-200">Our Work</a>
            <a onClick={()=> setSidebar(false)} href="#contacts" className="mx-4  sm:hover:border-b dark:text-gray-200">Contact</a>
        </div>
        {/* Theme Toggle Button */}
        <div className='flex items-center gap-2 sm:gap-4'>
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />
            <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
             alt="" onClick={()=> setSidebar(true)} className='w-8 sm:hidden' />
            {/* button contact us  */}
            <a href="#contact"
             className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full
             cursor-pointer hover:scale-105 transition-all">Contact Us <img src={assets.arrow_icon} width={14} alt="" /></a>

        </div>
    </motion.nav>
  )
}

export default Navbar