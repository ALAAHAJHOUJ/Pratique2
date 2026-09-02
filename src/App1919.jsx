import React, { useState } from 'react'

function App1919() {
  const [liste,setListe]=useState([{id:1},{id:2},{id:3}])

  const Ajouter=()=>{
     setListe((prev)=>{
        if(prev.length==15) return [{id:1}]
        return [...prev,{id:prev[prev.length-1].id+1}]
     })
  }

  return (
    <div onClick={Ajouter} id="meee">
       {
        liste.map((ele,key)=>{
             return <div className='bg-green-400 flex justify-center items-center text-white rounded-[10px]' key={ele.id}>{ele.id}</div>
        })
       }
    </div>
  )
}

export default App1919