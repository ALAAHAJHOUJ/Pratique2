import React, { useEffect, useState } from 'react'

function Recuperer() {
  const [liste,setListe]=useState([])


  useEffect(()=>{
      const Envoyer=async()=>{
           const resultat=await fetch("http://localhost:8080/recuperer1/")

           const resultat1=await resultat.json()

           setListe(resultat1)
      } 

      Envoyer()
  },[])


  return (
    <div className='border-black border-[1px] flex justify-center flex-wrap w-[300px] h-[300px]'>
       {
        liste.map((ele,key)=>{
           return <div className='border-black border-[1px] w-[80%] h-[80px]' key={key}>{ele.name1},{ele.name2}</div>
        })
       }
    </div>
  )
}

export default Recuperer