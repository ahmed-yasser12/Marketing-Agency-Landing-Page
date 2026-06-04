import assets from "@/assets/assets";
import "react";
import { motion } from "motion/react"

const Hero = () => {
  return (
    <header id="home"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      <motion.div initial={{opacity:0 ,y:20 }} whileInView={{opacity:1 ,y:0}}
      transition={{duration:0.5 , delay:0.7 }} viewport={{once:true}} className=" flex items-center gap-2 text-sm font-medium border border-gray-300 rounded-full p-1.5 pr-4">
        <img className="w-20" src={assets.group_profile} alt="" />
        <p className="text-xs font-medium">trusted by 10k+ people</p>
      </motion.div>
      <motion.h1 initial={{opacity:0 ,y:40 }} whileInView={{opacity:1 ,y:0}}
      transition={{duration:0.6 , delay:0.8 }} viewport={{once:true}}
        className="text-4xl sm:text-5xl lg:text-6xl 
                    xl:text-[84px] font-medium xl:leading-[90px] leading-[50px]"
      >
        Turning Imagination Into <br />{" "}
        <span
          className="bg-gradient-to-r
                         from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          {" "}
          digital
        </span>{" "}
        impact .
      </motion.h1>
      <motion.p initial={{opacity:0 ,y:30 }} whileInView={{opacity:1 ,y:0}}
      transition={{duration:0.5 , delay:1 }} viewport={{once:true}} className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 sm:max-w-lg pb-3">
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </motion.p>
      {/* image */}
      <motion.div initial={{opacity:0 ,scale:0.9 }} whileInView={{opacity:1 ,scale:1}}
      transition={{duration:0.5 , delay:1.5 }} viewport={{once:true}} className="relative">
        <img src={assets.hero_img} alt="Hero image" className="w-full max-w-6xl" />
        <img src={assets.bgImage1} alt="cover image" className="absolute -top-10 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden " />
      </motion.div>
    </header>
  );
};

export default Hero;
