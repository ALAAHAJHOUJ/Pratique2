import React, { useEffect, useRef, useState } from 'react'

function App33() {
  const [Liste,setListe]=useState([{id:1}])
  const [Arret,setArret]=useState(false)
  const ref2=useRef()
  const ref1=useRef(0)


  const Ajouter=()=>{
    if(Liste.length==10) { setArret(true);changer1();return}

    setListe((prev)=>{
       if(prev.length==10){
          ref1.current++
          return [{id:1}]
       }else {
         return [...prev,{id:prev[prev.length-1].id+1}]
       }
    })
  }


  const Pratique=()=>{
     const tableau=[1,61,99,8,99,100,19];
     let Max=tableau[1]-tableau[0];

     for(let i=0;i<tableau.length;i++){
       for(let j=0;j<tableau.length;j++){
        if(Math.abs(tableau[i]-tableau[j])>Max){
          Max=Math.abs(tableau[i]-tableau[j])
        }
       }
     }

     console.log(Max)
  }



  const tester=async()=>{
    const promise1=new Promise((res,rej)=>{
      setTimeout(() => {
        res("hey I'm resolved")
      }, 2000);
    })
    
    const resultat=await promise1;
    console.log(`le resultat de la promise est:${resultat}`)
  }




  const changer1=()=>{
    const taille=document.getElementsByClassName("element").length;
    const element=document.getElementsByClassName("element");

    for(let i=0;i<taille;i++){
      element[i].style.background="red"
      element[i].style.color="black"
    }
  }




  return (
    <>  
      <div  className=" border-black w-fit h-[90px]">
        {Arret==true?"Vous avez atteint le nombre maximum de répetitions":""}
      </div>

      <div onClick={Ajouter} className='border-[1px]  p-3.5 border-black flex justify-center items-center flex-wrap gap-1.5 w-[400px] h-[400px] '>
          {Liste.map((ele,key)=>{
            return <div key={ele.id} className='bg-green-500 element text-white w-[70px] h-[70px] rounded-[10px] flex justify-center items-center'>{ele.id}</div>
          })}
      </div>
    </>

  )
}

export default App33