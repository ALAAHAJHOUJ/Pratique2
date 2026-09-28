import React, { createContext, useState } from 'react'
import Context112 from './Context112'


export const context1=createContext(null)


function Context111() {
  const [state1,setState1]=useState("")

  const changer=(valeur)=>{
     setState1(valeur)
  }

  return (
    <div className='border-black border-[1px] flex justify-center items-center gap-3 w-[300px] h-[300px]'>
         <context1.Provider value={(valeur1)=>{changer(valeur1)}}>
            {
                state1
            }
            <Context112></Context112>
         </context1.Provider>
    </div>
  )
}

export default Context111