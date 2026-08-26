import React, { useState } from 'react'

function App91() {

  const [liste,setListe]=useState([{id:1},{id:2},{id:3}])

  const Ajouter=()=>{

    setListe((prev)=>{
        if(prev.length==14) return [{id:1}]
        return [...prev,{id:prev[prev.length-1].id+1}]
    })
  }

  return (
    <div onClick={Ajouter} className='border-black border-[1px] flex justify-center items-center gap-[10px] flex-wrap w-[400px] h-[400px]'>
       {
        liste.map((ele,key)=>{
            return <div key={ele.id} className='bg-green-400 text-white rounded-[10px] flex justify-center items-center w-[70px] h-[70px]'>{ele.id}</div>
        })
       }
    </div>
  )
}

export default App91