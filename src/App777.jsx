import { isGenerator } from 'framer-motion'
import React, { useRef, useState } from 'react'

function App777() {

  const [state1,setState1]=useState([{id:1}]) 
  const Ajouter1=useRef(true) 
  const NbMax=useRef(0)
  const arreter=useRef(false)

  const Ajouter=()=>{
    if(arreter.current==true) return 


    if(state1.length==20) {
        Ajouter1.current=false
        NbMax.current++
    }else if(state1.length==1){
        Ajouter1.current=true
        NbMax.current++
    }


    if(NbMax.current==4){
        document.getElementById("meee").innerHTML="vous avez atteint le nombre Maximum"
        arreter.current=true
        return 
    }

    setState1((prev)=>{
        if(Ajouter1.current==true)
          return [...prev,{id:prev[prev.length-1].id+1}]
        else 
          {
            const Aux=[...prev]
            Aux.pop()
            return Aux
          }
    })
  }


  return (
    <>
    <div id='meee' className=' mb-2.5 flex justify-center items-center text-center'>

    </div>
    <div onClick={Ajouter} className='border-black border-[1px] flex justify-center items-center gap-[10px] flex-wrap w-[300px] h-[300px]'>
       {
        state1.map((ele,key)=>{
            return <div className='bg-green-400 flex justify-center items-center text-white rounded-[10px] w-[50px] h-[50px]' key={ele.id}>{ele.id}</div>
        })
       }
    </div>
    </>

  )
}

export default App777