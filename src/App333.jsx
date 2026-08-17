import React, { useState } from 'react'

function App333() {

  const [Liste,setListe]=useState([{id:1}])  

  const Ajouter=()=>{

    setListe((prev)=>{
        if(prev.length==20) return [{id:1}]
        else return [...prev,{id:prev[prev.length-1].id+1}]
    })
  }

  return (
    <div onClick={Ajouter} className='border-black border-[1px] p-3 flex justify-center items-center gap-[10px] flex-wrap w-[300px] min-h-[300px]'>
       {
        Liste.map((ele,key)=>{
            return <div key={ele.id} className='bg-green-500 rounded-[10px] w-[70px] h-[70px] text-white flex justify-center items-center'>{ele.id}</div>
        })
       }
    </div>
  )
}

export default App333