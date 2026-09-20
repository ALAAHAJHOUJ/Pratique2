import React, { useEffect, useState } from 'react'

function API2() {
  const [liste,setListe]=useState({})
  const [loading,setLoading]=useState(true)
  const [erreur,setErreur]=useState(false)



  const Envoyer=async()=>{
       try {
          const resultat1=await fetch("http://localhost:4000/Ajouter/",{method:"POST",body:JSON.stringify({name1:"HAJHOUJ1",name2:"israe1"}),headers:{"Content-Type":"application/json"}})
       
          const resultat2=await resultat1.text()

          console.log(resultat2)

        } catch (error) {
          console.log("une erreur s'est produite")
       } 
  }





  return (
    <div className='border-black border-[1px] flex flex-wrap justify-center items-center gap-[10px] w-[300px] min-h-[300px] p-3'>
      <button onClick={Envoyer} className='bg-blue-500 font-bold hover:bg-blue-300 cursor-pointer text-white w-[100px] h-[50px] rounded-[10px] flex justify-center items-center'>Ajouter</button>    
    </div>
  )
}

export default API2