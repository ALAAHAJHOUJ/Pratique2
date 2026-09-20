import React from 'react'

function Supprimer22() {

  const Supprimer=async()=>{
      try { 
          const resultat=await fetch("http://localhost:4000/supprimer1/",{method:"DELETE"})
 
          const resultat2=await resultat.text()

          console.log(resultat2)
      } catch (error) {
         console.log("une erreur est servenue")
      }
  }


  return (
    <div className='border-black border-[1px] flex justify-center items-center w-[300px] h-[300px]'>
         <button onClick={Supprimer} className='bg-red-500 text-white font-bold rounded-[10px] hover:bg-red-300 cursor-pointer p-3'>Supprimer</button>
    </div>
  )
}

export default Supprimer22