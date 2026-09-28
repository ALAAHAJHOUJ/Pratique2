import React, { useState } from 'react'



function Comp22() {

  const [liste,setListe]=useState([])



  const Envoyer=async()=>{

    try {
        const resultat1=await fetch("http://localhost:4000/GetExemples/")

        const contentType = resultat1.headers.get("content-type");

        if (contentType?.includes("application/json")) {
              const data = await resultat1.json();
              setListe(data)
        } else {
              const text = await resultat1.text();
              console.log(text);
        }
    } catch (error) {
        console.log(error)
    }
  }


  return (
      <div onClick={Envoyer} className="border-[1px] border-black w-[300px] min-h-[300px] flex justify-center items-center gap-2.5 flex-wrap p-3">

        {
          liste.map((ele,key)=>{
             return <div key={key} className='bg-green-400 rounded-[10px] w-[80px] h-[80px] text-white flex justify-center items-center'>{ele.propr1}</div>
          })
        }
      </div>
  )
}

export default Comp22