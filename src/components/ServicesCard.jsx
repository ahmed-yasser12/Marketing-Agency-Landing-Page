/* eslint-disable no-unused-vars */
import "react";
import { motion } from "motion/react"

const ServicesCard = ({services ,index}) => {
  return (
    <>
  
  <motion.section initial={{opacity:0 , y:30 }} whileInView={{opacity:1 ,y:0 }} transition={{duration:0.5 ,delay:index*0.2}} viewport={{once: true }} className="group relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700">

  {/* Glow Effect */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-r
      from-blue-500
      via-indigo-500
      to-purple-500
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-500
    "
  />

  {/* Card Content */}
  <div
    className="
      relative z-10
      flex items-center gap-10
      p-8 m-1
      rounded-xl
      bg-white dark:bg-gray-900
      transition-all duration-300
      group-hover:m-0.5
      group-hover:scale-[0.98]
    "
  >
    <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
      <img
        src={services.icon}
        className="max-w-24 bg-white dark:bg-gray-900 rounded-full m-2"
        alt={services.title}
      />
    </div>

    <div className="flex-1">
      <h3 className="text-xl font-bold">
        {services.title}
      </h3>

      <p className="text-sm mt-2">
        {services.desc}
      </p>
    </div>
  </div>

</motion.section>
    </>
  );
};

export default ServicesCard;
