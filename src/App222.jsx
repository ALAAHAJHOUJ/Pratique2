import React, { useRef, useState } from 'react'



const elements=[1,2,3,4,5]


function App222() {
  const [Liste,setListe]=useState([{id:1}])
  const arreter=useRef()
  const Arreter=useRef(false)
  
  const Ajouter=async()=>{
     const taille=document.getElementsByClassName("element").length;
     const ele=document.getElementsByClassName("element");
     for(let i=0;i<taille;i++){
       const promise1=new Promise((res,rej)=>{
        setTimeout(() => {
          res(`Hey I'm resolved: ${i}`)
        }, 200);
       })

       const resultat=await promise1
       ele[i].style.transition="400ms all"
       ele[i].style.background="red"
       ele[i].style.color="black"
     }
  }

  const Ajouter1=(element)=>{
     const tableau=[9,88,71,81,888]
     for(let i=0;i<tableau.length;i++){
         if(tableau[i]==element) return i
     }

     return -1
  }

  const Ajouter3=()=>{
    const resultat1=Ajouter1(888)
    console.log(resultat1)
  }

  const Ajouter4=()=>{
    arreter.current=setInterval(() => {
       console.log("HEY")
    }, 1000);
  }

  const Ajouter5=()=>{
    clearInterval(arreter.current)
  }

  const Gerer=()=>{
     if(Arreter.current==false) Ajouter4()
     else Ajouter5() 

     Arreter.current=!Arreter.current
  }

  return (
    <div onClick={Ajouter} onDoubleClick={Gerer} className='border-black border-[1px] flex gap-2.5 justify-center items-center w-[300px] h-[300px] flex-wrap'>
        {elements.map((ele,key)=>{
          return <div className='bg-green-500 element rounded-[10px] flex justify-center items-center w-[70px] h-[70px] text-white'  key={ele}>{ele}</div>
        })}
    </div>
  )
}

export default App222