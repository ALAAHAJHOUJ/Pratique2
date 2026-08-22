import React, { useState } from 'react'

function App88() {
  const [liste,setListe]=useState([{id:1}])


  const Ajouter=()=>{
    if(liste.length==20) return
    else setListe((prev)=>{
      return [...prev,{id:prev[prev.length-1].id+1}]
    })
  }

  return (
    <div onClick={Ajouter} className='border  element flex justify-center gap-[10px] items-center w-[300px] h-[300px] flex-wrap'>
         {
          liste.map((ele,key)=>{
            return <div key={ele.id} className='text-white bg-green-400 rounded-[10px] w-[80px] h-[80px] flex justify-center items-center'>{ele.id}</div>
          })
         }  
    </div>
  )
}

export default App88