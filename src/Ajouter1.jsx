import React, { useState } from 'react'

function Ajouter1() {


  const [state1,setState1]=useState({})
  const [afficher,setAfficher]=useState(false)

  const Envoyer=()=>{

        fetch("http://localhost:4000/tester888/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name1:"hajhouj",name2:"israe"})})
        .then((res)=>{console.log(res);return res.json()})
        .then((res)=>{console.log(res);setState1(res);setAfficher(true)})
        .catch((error)=>{console.log(error)}) 
  
    }
  

  return (
        <div className='border-black border-[1px] text-center flex flex-col justify-center items-center gap-[10px] w-[400px] h-[400px] flex-wrap'>
         
         {
              afficher==true?`le propr1 est:${state1.name1} et la propr2 est:${state1.name2} et la propr3 est:${state1.propr}`:''
         }

        </div>
  )
}

export default Ajouter1