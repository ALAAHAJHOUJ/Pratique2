import React, { useState } from 'react'



function Comp22() {
  const tester=(element)=>{
        const tableau=[1,88,71,7,66,19]

        for(let i=0;i<tableau.length;i++){
          if(tableau[i]==element){
               return i
          }

        }

                  return -1
  }

  const Afficher=()=>{
     const resultat=tester(1911)
     if(resultat==-1) console.log("l'element est introuvable")
     else console.log("l'element se trouve a l'indice:"+resultat)
  }

  return (
    <div  onClick={Afficher}  className='border-black relative border-[1px] w-[400px] h-[400px]'>
         <div className='bg-red-500 absolute w-[50px] h-[50px] top-[10px] left-[10px] z-[51]'></div>
         <div className='bg-green-500  w-[50px] h-[50px]'>
             <div className='bg-yellow-400 absolute w-[50px] h-[50px] top-0 left-0 z-50'></div>
         </div>
    </div>
  )
}

export default Comp22