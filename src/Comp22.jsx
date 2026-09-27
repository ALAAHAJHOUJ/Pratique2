import React, { useState } from 'react'



function Comp22() {

  const [liste,setListe]=useState([])

  const Ajouter=async()=>{

     

     setListe((prev)=>{

        
        if(prev.length==0||prev.length==15) return [{id:1}]

        else return [...prev,{id:prev[prev.length-1].id+1}]
     })

  }


  return (
      <div onClick={Ajouter} className="border-[1px] border-black w-[300px] min-h-[300px] flex justify-center items-center gap-2.5 flex-wrap p-3">

        {
          liste.map((ele,key)=>{
             return <div key={ele.id} className='bg-green-400 w-[80px] h-[80px] text-white flex justify-center items-center'>{ele.id}</div>
          })
        }
      </div>
  )
}

export default Comp22