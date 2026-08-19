import React, { useContext, useEffect, useRef } from 'react'
import { context1 } from './ContextA';

function Tester11() {
  const {propr1,propr2,propr3}=useContext(context1);
  const ref1=useRef()
  const ref2=useRef("")

  const tester5=(event)=>{

       if(ref1.current.value.length<=30)
       {          
          ref2.current=event.target.value
          propr2(event.target.value.toLowerCase())
       }
       else 
          ref1.current.value=ref2.current

  }

  const tester66=()=>{
        propr3.current.innerHTML=""
        let contenu="<div style='width:20px;height:20px;background:red;border-raduis:10px;border:1px solid black'></div>"  

        for(let i=0;i<5;i++){
            contenu+="<div style='width:20px;height:20px;background:red;border-raduis:10px;border:1px solid black'></div>"
        }

        propr3.current.innerHTML=contenu
  }


  

  return (
    <input  ref={ref1} onChange={(e)=>{tester5(e)}} type='text' className='border-black border-[1px] w-[200px] h-[50px] rounded-[10px] flex justify-center items-center gap-[10px] flex-wrap'>
        
    </input>
  )
}

export default Tester11