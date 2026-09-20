import React, { useEffect, useState } from 'react'

function Recuperer11() {

  const [loading,setLoading]=useState(true)
  const [erreur,setErreur]=useState(false)
  const [elements,setElements]=useState([])


  const recuperer1=async()=>{
    try {
        const resultat1=await fetch("http://localhost:4000/recuperer")

        const resultat2=await resultat1.json()

        console.log(resultat2)

        setElements(resultat2)
    } catch (error) {
        setErreur(true)
    } finally{
        setLoading(false)
    }
  }



  useEffect(()=>{
     recuperer1()
  },[])

  return (
    <div className='border-black border-[1px] flex flex-wrap justify-center items-center gap-3 w-[300px] min-h-[300px] p-3.5'>
        {
            loading==true?<span>Loading...</span>:
            erreur==true?<span>une erreur est servenue</span>:
            elements.length==0?<span>la liste est vide</span>:
            elements.map((ele,key)=>{
                return <div key={key} className='border flex justify-center items-center gap-3 text-center p-2'>l'element 1 est:{ele.name1} ,l'element 2 est:{ele.name2}</div>
            })
        }
    </div>
  )
}

export default Recuperer11