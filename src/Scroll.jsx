import { useScroll, useTransform } from 'framer-motion'
import React, {useEffect, useRef, useState} from 'react'
import { motion } from 'framer-motion';


function Scroll() {
   const ref1=useRef()
   const scroll1=useScroll({target:ref1,offset: ["start 90%", "end 90%"]});
   const scale = useTransform(scroll1.scrollYProgress, [0,1], [0.6,1]);

   const tester=()=>{
        class User{
               constructor(username,password){
                  this.password=password;
                  this.username=username;
               }


        }

        class Admin extends User{
               constructor(username,password,role){
                  super(username,password)
                  this.role=role
               }

        }

        const admine1=new Admin("HAJHOUJ","2001HAJHOUJ",11)
        console.log(admine1)
        
   }

   const tester1=()=>{
      const Aux=[]
      const resultat=[]

      const tester2=()=>{
           if(Aux.length==6) return resultat.push([...Aux])

           Aux.push("(")
           tester2()
           Aux.pop()

           Aux.push(")")
           tester2()
           Aux.pop()
      }

      tester2()
      const resultat2=resultat.map((ele,key)=>{
         return ele.join("")
      })

      console.log(resultat2)
   }


   return <div onClick={tester1} className='border w-[300px] h-[300px] mb-[10px]'>
   <motion.div ref={ref1} style={{border:"1px solid black",width:"100%",height:"100%",scale:scale}}>

   </motion.div>
   </div>

}

export default Scroll