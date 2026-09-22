import { useScroll, useTransform } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'


function Ajouter1(props) {
  const ref1=useRef()
  const resultat=useScroll({
    target:ref1,
    offset:["start 90%","end 70%"]
  })

  const resultat1=useTransform(resultat.scrollYProgress,[0,1],[0.4,1])



  return (
        <div className=' w-[400px] h-[400px] relative mb-[100px]'>
            <motion.div ref={ref1} style={{scale:resultat1,opacity:resultat1}} className='bg-green-600 text-[40px] font-bold  border text-center flex flex-col justify-center items-center gap-[10px] w-full h-full flex-wrap'>
                {
                  props.nom
                }
            </motion.div>
        </div>

  )
}

export default Ajouter1