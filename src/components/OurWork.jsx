import  'react'
import Title from './Title'
import assets from '@/assets/assets'
import { motion } from "motion/react"

const OurWork = () => {
  
  const workData=[
    {
      title:"Mobile app marketing",
      desc:"We turn bold ideas into powerful digital solutions that connect, engage...",
      image:assets.work_mobile_app
    },
    {
      title:"Dashboard management",
      desc:"We help you execute your plan and deliver results.",
      image:assets.work_dashboard_management
    },
      {
      title:"Fitness app promotion",
      desc:"We help you create a marketing strategy that drives results.",
      image:assets.work_fitness_app
    },
    

  ]
  return <>
    <motion.section  initial={"hidden"} whileInView={"visible"}  viewport={{once: true }} id='work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title={"Our latest work"} desc={"From strategy to execution, we craft digital solutions that move your business forward."}/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl gap-6'>
      {workData.map((item,index)=>{
        return <motion.div  initial={{opacity:0 , y:20 }} whileInView={{opacity:1 ,y:0 }} transition={{duration:0.4 ,delay:index*0.1}} viewport={{once: true }} key={index} className=' hover:scale-105  duration-500 transition-all cursor-pointer'>
          <img src={item.image} alt={item.title} className='w-full  rounded-xl mb-4'/>
          <h3 className='text-xl font-semibold mt-3 mb-2'>{item.title}</h3>
          <p className='text-sm opacity-60 w-5/6'>{item.desc}</p>
        </motion.div>
      })}
      </div>
    
    </motion.section>
  
  
  </>
}

export default OurWork