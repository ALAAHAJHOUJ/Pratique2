import React, { useEffect, useRef, useState } from 'react'

function API2() {

  const ref1=useRef();
  const ref2=useRef();


  const Envoyer=async()=>{
       if(!ref1.current.value || !ref2.current.value) return 

       
       try {
          const resultat1=await fetch("http://localhost:4000/Ajouter/",{method:"POST",body:JSON.stringify({name1:ref1.current.value,name2:ref2.current.value}),headers:{"Content-Type":"application/json"}})
       
          const resultat2=await resultat1.text()

          console.log(resultat2)

        } catch (error) {
          console.log("une erreur s'est produite")
       } 
  }





  return (
    <div className='border-black border-[1px] flex flex-wrap justify-center items-center gap-[10px] w-[300px] min-h-[300px] p-3'>
      <input ref={ref1} type="text" className='border w-[70%] h-[40px] box-border p-2 rounded-[10px]'/>
      <input ref={ref2} type="text" className='border w-[70%] h-[40px] box-border p-2 rounded-[10px]'/>
      <button onClick={Envoyer} className='bg-blue-500 font-bold hover:bg-blue-300 cursor-pointer text-white w-[100px] h-[50px] rounded-[10px] flex justify-center items-center'>Ajouter</button>    
    </div>
  )
}

export default API2