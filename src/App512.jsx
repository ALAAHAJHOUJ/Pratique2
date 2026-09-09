import React, { useState } from 'react'

function App512() {
  const [liste,setListe]=useState([{id:1}])

  const Ajouter=()=>{
      setListe((prev)=>{
          return [...prev,{id:prev[prev.length-1].id+1}]
      })
  }


  return (
    <div onClick={Ajouter} className='border-[1px] border-black w-[400px] h-[400px] me11'>

    </div>
  )
}

export default App512