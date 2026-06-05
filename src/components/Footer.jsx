import assets from '@/assets/assets'
import 'react'
import { motion } from "motion/react"

const Footer = ({theme}) => {
  return <>
    <motion.section  initial={"hidden"} transition={{staggerChildren:0.2}} whileInView={"visible"}  viewport={{once: true }}>
        <footer className=' bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40 '>
            <div className='flex flex-col sm:flex-row justify-between py-3 gap-10' >
                  <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                <img src={theme === 'dark'? assets.logo_dark :assets.logo} className='w-32 sm:w-44' alt="" />
                <p className='max-w-md'>From strategy to execution, we craft digital solutions that move your business forward.</p>
                <ul className='flex flex-wrap items-center gap-4 sm:gap-10'>
                    <li><a className='hover:text-primary' href='#home'>Home </a></li> 
                    <li><a className='hover:text-primary' href='#services'>Services </a></li> 
                    <li><a className='hover:text-primary' href='#work'>Our Work </a></li> 
                    <li><a className='hover:text-primary' href='#contacts'>Contacts Us  </a></li> 
                </ul>
            </div>
            <div className='text-gray-600 dark:text-gray-400 '>
                    <h3 className='font-semibold'>Subscribe to our newsletter</h3>
                    <p className='text-sm mt-2 mb-6 '>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className='flex flex-col sm:flex-row gap-2 text-sm'>
                        <input type="email" placeholder='Enter Your Email' className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'  />
                        <button className='bg-primary text-white rounded px-6 py-3 sm:py-0'>Subscribe</button>
                    </div>
            </div>
            </div>
            <hr className='border-gray-300 dark:border-gray-600 my-6' />
            <div className='flex flex-col sm:flex-row items-center justify-between py-4 gap-4 text-center sm:text-left'>
                <p className=' text-gray-700 dark:text-gray-400'>Copyright 2026  - All Right Reserved.</p>
                <div className='flex gap-4 items-center justify-center'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
        </footer>
    </motion.section>
  
  
  </>
}

export default Footer