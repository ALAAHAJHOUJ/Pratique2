import React, { useState } from 'react'

function Comp1() {
  const [liste,setListe]=useState([])
  const [afficher,setAfficher]=useState(false)



  const Envoyer=async()=>{

    try {
            const resultat1=await fetch("http://localhost:4000/getById/13")

            const type=resultat1.headers.get("content-type") || "";

            const data = type.includes("application/json")
                ? await resultat1.json()
                : await resultat1.text();

            setListe(data)

            if(typeof data=="string"){
                return 
            }
            setAfficher(true)
    } catch (error) {
            console.log(error)
    }

  }

  return (
    <div onClick={Envoyer} style={{lineHeight:"100px"}} className='border-black border-[1px] text-center flex justify-center items-center gap-4 flex-wrap w-[300px] min-h-[300px] p-3'>
         {
              afficher==true?`l'id:${liste[0].id},le nom 1 est:${liste[0].name1},le nom2 est:${liste[0].name2}`:""
         }
    </div>
  )
}

export default Comp1