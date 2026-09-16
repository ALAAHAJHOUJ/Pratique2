import { useScroll, useTransform,motion} from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer";


function Pratique888() {
  const ref1=useRef();
  const ref2=useRef();

  const scroll=useScroll({
    target:ref1,
    offset:["start 1","end 0.8"]
  });

    
  const scroll1=useScroll({
    target:ref2,
    offset:["start 1","end 0.8"]
  });


  const scale1=useTransform(scroll.scrollYProgress,[0,1],[0.4,1])
  const scale2=useTransform(scroll1.scrollYProgress,[0,1],[0.4,1])



  return (
    <>
        <div className=' relative w-[300px] h-[300px]'>

          <motion.div ref={ref1} className="border-black border-[1px] w-full h-full absolute bg-green-500" style={{scale:scale1,opacity:scale1}}>


          </motion.div>

       </div>

       <div className=' relative w-[300px] h-[300px]'>

          <motion.div ref={ref2} className="border-black border-[1px] w-full h-full absolute bg-green-500" style={{scale:scale2,opacity:scale2}}>


          </motion.div>

       </div>
    
    </>


    
  )
}

export default Pratique888