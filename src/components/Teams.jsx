import 'react'
import Title from './Title'
import { teamData } from '@/assets/assets'

const Teams = () => {
  return <>
    <section id='teams' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <Title title={"Meet the team"} desc="A passionate team of digital experts dedicated to your brands success." />
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {teamData.map((item,index)=>{
                    return <div key={index} className='flex border border-gray-400 dark:border-gray-700 cursor-pointer shadow-md dark:bg-gray-900 dark:shadow-white/5  hover:scale-105 transition-all duration-500  items-center gap-3 py-4 px-3 rounded-lg'>
                        <img src={item.image} alt={item.name} className='w-10 h-10  rounded-full'/>
                       <div>
                         <h3 className='text-md font-semibold'>{item.name}</h3>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>{item.title}</p>
                       </div>
                    </div>
                })}
            </div>
    </section>
  
  </>
}

export default Teams