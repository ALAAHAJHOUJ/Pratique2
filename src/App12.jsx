import React, { useEffect, useState } from 'react'

function App12() {
  const [Liste,setListe]=useState([{id:1},{id:2}])

  const Ajouter=()=>{
    if(Liste.length==12) return 
    setListe((prev)=>{
      return [...prev,{id:prev[prev.length-1].id+1}]
    })
  }

  const isValide=(text)=>{
     const pile=[]
     for(let i=0;i<text.length;i++){
       if(text[i]=="("){
          pile.push(1)
       }else if(text[i]==")"){
          if(pile.length==0){
            return false
          }
          else {
            pile.pop()
          }
       }
     }
     return pile.length==0?true:false
  }

  const Afficher=(text)=>{
      const resultat=isValide(text)
      if(resultat==true){
        console.log("la chaine est valide")
      }else {
        console.log("la chaine est non valide")
      }
  }

  useEffect(()=>{
      Afficher("")
  },[])


  return (
    <div onClick={Ajouter} className='element11 border'>
        {Liste.map((ele,key)=>{
            return <div key={ele.id} className='bg-green-400 text-white flex justify-center items-center'>{ele.id}</div>
        })}
    </div>
  )
}

export default App12