import React, { useEffect, useRef, useState } from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";


function Carousel() {
  const [state1,setState1]=useState(1)


  const changer=(element)=>{

     if(element=="droite"){
        setState1((prev)=>{
            if(prev==3){
                return 1
            }
            else {
                return prev+1
            }
        })
     }else {
        setState1((prev)=>{
            if(prev==1){
                return 3
            }
            else {
                return prev-1
            }
        })
     }
  }


     const tester22=()=>{
        const Aux=[]
        const resultat=[]

        const tester33=()=>{
            if(Aux.length==5) return resultat.push([...Aux])

            Aux.push("(")
            tester33()
            Aux.pop()

            Aux.push(")")
            tester33()
            Aux.pop()
        }

        tester33()

        const resultat2=resultat.map((ele,key)=>{
            return ele.join("")
        })

        console.log(resultat2)
     }





  return (
    <div onClick={tester22} className=' w-[500px] h-[500px] flex justify-center items-center gap-4'>
       <div onClick={()=>changer("gauche")} className=' w-[50px] h-[50px] flex justify-center items-center'>
          <FaArrowAltCircleLeft size={40} className='hover:text-[#b1b1b1] hover:scale-[1.4] transition-all duration-700'></FaArrowAltCircleLeft>
       </div>

       <div  className='border w-[70%] aspect-square flex justify-center font-bold items-center text-[40px]'>
         {
            state1
         }
       </div>

       <div onClick={()=>changer("droite")} className=' w-[50px] h-[50px] flex justify-center items-center'>
          <FaArrowAltCircleLeft size={40} className='rotate-[180deg] hover:text-[#b1b1b1] hover:scale-[1.4] transition-all duration-700'></FaArrowAltCircleLeft>
       </div>
    </div>
  )
}

export default Carousel