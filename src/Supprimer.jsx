import React, { useEffect, useRef } from 'react'

function Supprimer({changer}) {
  const ref1=useRef();


  const Envoyer=()=>{
      console.log(ref1.current.value)

      fetch("http://localhost:8080/supprimer1/"+ref1.current.value,{method:"DELETE"})
      .then((res)=>{console.log(res);return res.text()})
      .then((res)=>{console.log(res)})
      .catch((error)=>{console.log(error)})


  }


  return (
    <div className='border-black border-[1px] gap-3 flex flex-col justify-center items-center w-[300px] h-[300px]'>
         <input ref={ref1} type="number" className="border-black border-[1px] w-[140px] h-[40px] rounded-[10px]" />
         <button onClick={Envoyer} className='bg-blue-500 text-white p-4 rounded-[10px]'>Supprimer</button>
         <button onClick={changer} className='bg-green-400 text-white rounded-[10px] p-4'>Recuperer</button>
    </div>
  )
}

export default Supprimer