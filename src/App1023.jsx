import React, { useEffect, useState } from 'react'


function App1023() {
  const [Liste,setListe]=useState([{id:1},{id:2},{id:3}])

  const Ajouter=()=>{
    if(Liste.length==10) setListe([{id:1}])

    else {
        setListe((prev)=>{
            return [...prev,{id:prev[prev.length-1].id+1}]
        })
    }
  }

  const factorielle=(nb)=>{
    if(nb==1||nb==1) return 1
    else return nb*factorielle(nb-1)
  }

  useEffect(()=>{
     const resultat=factorielle(5)
     console.log(resultat)
  },[])
  return (
      <div onClick={Ajouter} className='border-[1px] border-black flex justify-center items-center gap-[10px] w-[400px] h-[400px] flex-wrap gap-[10px]'>
          {
            Liste.map((ele,key)=>{
                return <div key={ele.id} className='bg-green-300 text-white w-[80px] h-[80px] rounded-[10px] flex justify-center items-center '>{ele.id}</div>
            })
          }
      </div>
  )
}

export default App1023