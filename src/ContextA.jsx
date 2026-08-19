import React, { createContext, useRef, useState } from 'react'
import Tester11 from './Tester11'

export const context1=createContext("aucune valeur")

function Context() {
  const [element1,setElement1]=useState("")
  const ref1=useRef()


  return (
    <div ref={ref1} className='border-black border-[1px] flex flex-col-reverse justify-center items-stretch gap-[10px] flex-wrap w-[300px] h-[300px]'>
        {element1.length==30?"taille maximale":""}
        <span className='font-bold text-[25px] border text-red-600 text-center'>
            {element1}
        </span>
        <context1.Provider value={{propr1:"HAJHOUJ",propr2:(element)=>{setElement1(element)},propr3:ref1}}>
           <Tester11></Tester11>
        </context1.Provider>
    </div>
  )
}

export default Context