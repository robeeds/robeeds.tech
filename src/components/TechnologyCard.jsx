import React from 'react'
import { techInfo } from '../constants'

const TechnologyCard = ({ lang, img }) => {
  return (
    <div className='flex items-center p-6'>
        {/* Cards + Grid? */}
        <p className='font-poppins font-semibold text-dimWhite tracking-wide mr-2 xxs:text-[30px] lg:text-[32px]'>{lang}</p>
        <img src={img} alt={lang} className='object-contain xxs:h-[30px] xxs:w-[30px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px]'/>
    </div>
  )
}

export default TechnologyCard