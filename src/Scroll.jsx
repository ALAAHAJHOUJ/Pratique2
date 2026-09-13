import { useScroll } from 'framer-motion'
import React, {useEffect} from 'react'
import { motion } from 'framer-motion';


function Scroll() {
  const resultat=useScroll();
   

  return (
       <motion.div style={{width:"100%",height:"20px",scaleX:resultat.scrollYProgress,background:"red",position:"fixed",top:0,right:0}}>

       </motion.div>
  )
}

export default Scroll