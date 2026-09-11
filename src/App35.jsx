import React, { useState } from 'react'

function App35() {
  const [liste,setListe]=useState([{id:1}])
  const Ajouter=()=>{
    if(liste.length==6) {
        return 
    }

    setListe((prev)=>{
        return [...prev,{id:prev[prev.length-1].id+1}]
    })
  }


  const tester=()=>{
    class User{
      login=false
      constructor(username,password){
        this.password=password;
        this.username=username;
      }



      Login(){
        this.login=true
      }

      Logout(){
        this.login=false
      }
    }


    const tableau=[]
    for(let i=1;i<10;i++){
          const user=new User(`User:${i}`,Math.floor((Math.random()*10)))
          tableau.push(user)
    }
    
    console.log(tableau)
  }

  
  const tester1=()=>{
     for(var i=0;i<10;i++){
      setTimeout(() => {
          console.log(i)
      }, 1000);
     }
  }


  const parenth=()=>{
    const resultat=[]
    const Aux=[]

    const parenth1=()=>{
      if(Aux.length==6) return resultat.push([...Aux])

      Aux.push("(")
      parenth1()
      Aux.pop()
      
      
      Aux.push(")")
      parenth1()
      Aux.pop()
    }

    parenth1()

    const resultat1=resultat.map((ele,key)=>{
      return ele.join("")
    })

    console.log(resultat1)
  }



  return (
     <div onClick={parenth} style={{direction:"rtl",textAlign:"center"}} className='border w-[200px] h-[200px] box-border pt-7'>
           <span className='border'>hey hajhouj tester teste.</span>
     </div>
  )
}

export default App35