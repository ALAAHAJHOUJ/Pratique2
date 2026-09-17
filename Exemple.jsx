import React, { useEffect } from 'react'
import { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Exemple() {
  const [liste1,setListe1]=useState([])
  const [Loading,setLoading]=useState(true)
  const [mode,setMode]=useState(true)

  const Envoyer=()=>{
    fetch(" http://localhost:8080/tester9000/")
    .then((res)=>{console.log(res);return res.json()})
    .then((res)=>{console.log(res);setListe1(res)})
    .catch((error)=>{console.log("une erreur s'est produite")})
    .finally(()=>{setLoading(false)})
  }


   useEffect(()=>{
        Envoyer()
   },[])

   const changer=()=>{
       setMode((prev)=>{
         return !prev
       })
   }

  return (
    <>

    <div className='border-black border-[1px] w-[60px] h-[60px] flex justify-center items-center rounded-[50%]'>
        {
            mode==true?<MdDarkMode onClick={changer} size={40}></MdDarkMode>:<MdLightMode onClick={changer} size={40}></MdLightMode>
        }
    </div>
    <div className='border-black border-[1px] flex flex-wrap justify-center items-center gap-4 w-[400px] min-h-[400px] p-3'>
        {

            Loading==true?<span>Loading ...</span>:
            liste1.map((ele,key)=>{
                
                return <div style={mode==true?{border:"1px solid black",color:"black",background:"white"}:{border:"1px solid white",color:"white",background:"black"}} key={ele.name1} className='border rounded-[10px] w-[90%] h-[60px] flex justify-center items-center gap-3'>{`la propr1:${ele.name1} , la propr2:${ele.name2}`}</div>
            })
        }
    </div>
    </>

  )
}

export default Exemple