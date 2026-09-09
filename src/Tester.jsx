import React, { useEffect, useRef, useState } from 'react'

function Tester() {
  const [liste,setListe]=useState([{id:1}])
  const nombre=useRef(0)

  const Ajouter=()=>{
    
    setListe((prev)=>{
       if(liste.length==10) {nombre.current++;return [{id:nombre.current}];}


       return [...prev,{id:prev[prev.length-1].id+1}]
    })
  }


  



  return (
    <div onClick={Ajouter}  className='border flex flex-wrap justify-center items-center gap-[10px] w-[400px] h-[400px]'>
         {
          liste.map((ele,key)=>{
            return <div key={ele.id} className='bg-green-400 text-white w-[80px] h-[80px] rounded-[10px] flex justify-center items-center'>{ele.id}</div>
          })
         }
    </div>
  )
}

export default Tester