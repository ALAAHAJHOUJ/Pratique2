import { useScroll, useTransform } from 'framer-motion'
import React, {useEffect, useRef, useState} from 'react'
import { motion } from 'framer-motion';


function Scroll() {
   const ref1=useRef()
   const scroll1=useScroll({target:ref1,offset: ["start 50%", "end 50%"]});
   const scale = useTransform(scroll1.scrollYProgress, [0,1], [0.3,1]);

   return <motion.div ref={ref1} style={{border:"1px solid black",width:"900px",height:"900px",scale:scale}}>

   </motion.div>
}

export default Scroll