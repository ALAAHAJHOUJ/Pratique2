import { useScroll, useTransform,motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

function Pratique888() {
  const resultat=useScroll({
    offset:["start 0.5","end 0.5"]
  })
  const scale1= useTransform(resultat.scrollYProgress, [0,1], [1,1.4]);



  return (
    <motion.div  className='border-black border-[1px] w-[300px] h-[300px] bg-green-400' style={{scale:scale1}}>

    </motion.div>
  )
}

export default Pratique888