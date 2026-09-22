import React, { useEffect, useRef, useState } from 'react'

function Zindex() {
  const [liste,setListe]=useState([])
  const [index,setIndex]=useState(1)


  const Envoyer1=()=>{


     fetch("http://localhost:4000/recuperer/")
     .then((res)=>{console.log(res);return res.json()})
     .then((res)=>{console.log(res);setListe(res);})
     .catch((err)=>{console.log(err)})

  }



  const Envoyer2=()=>{

     fetch("http://localhost:4000/Ajouter/",{method:"POST",body:JSON.stringify({name:`User${index}`}),headers:{"Content-Type":"application/json"}})
     .then((res)=>{console.log(res);return res.text()})
     .then((res)=>{console.log(res);Envoyer1();setIndex(index+1)})
     .catch((err)=>{console.log(err)})
  
  }


  const Supprimer=async()=>{

    try {
        const resultat=await fetch("http://localhost:4000/supprimer1/",{method:"DELETE"})

        const resultat2=await resultat.text()

        console.log(resultat2)

        Envoyer1()
        setIndex(1)
    } catch (error) {
        console.log(error)
    }
  }



  return (
    <>
    <button onClick={Supprimer} className='bg-red-500 text-white rounded-[10px] p-4 hover:bg-red-200 cursor-pointer'>Supprimer</button>
    <div onClick={Envoyer2} className='border w-[400px] min-h-[400px] flex justify-center items-center flex-wrap gap-4 p-3'>
         {
             liste.map((ele,key)=>{
                return <div key={key} className='bg-green-500 text-white flex justify-center items-center rounded-[10px] w-[70px] h-[70px]'>{ele.name}</div>
             })
         }
    </div>
    </>

  )
}

export default Zindex