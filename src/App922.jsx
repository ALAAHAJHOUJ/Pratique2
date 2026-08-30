import React, { useEffect, useRef, useState } from 'react'
import { GiCircleForest } from 'react-icons/gi'


const Liste=[{id:1},{id:2},{id:3}]


function App922() {
  const [drop,setDrop]=useState(false)
  const [Index,setIndex]=useState(null)
  const ref1=useRef()

  const Supprimer=(e)=>{

     if(ref1.current==e.target)
     {
        setDrop(false)
     }
  }
  

  const tester22=()=>{
       class User{
          constructor(username,password){
            this.password=password;
            this.username=username;
          }

          tester66(){
               console.log(this)
          }


       }

       const tableau=[]
       for(let i=1;i<10;i++){
          const user=new User(`HAJHOUJ:${i}`,'2001')
          tableau.push(user)
       }
       
       for(let i=0;i<tableau.length;i++){
            tableau[i].tester66()
       }
  }


  const Parenth=()=>{
     const Aux=[]
     const resultat=[]

     function Parenth1(){
        if(Aux.length==6){
            resultat.push([...Aux])
        }else {
            Aux.push("(")
            Parenth1()
            Aux.pop()

            Aux.push(")")
            Parenth1()
            Aux.pop()
        }
     }

     Parenth1()

     const tableau=resultat.map((ele,key)=>{
        return ele.join("")
     }).filter((ele,key)=>{
      return IsValid(ele)==true
     })

     console.log(tableau)
  }

  const IsValid=(text)=>{
      const pile=[]

      for(let i=0;i<text.length;i++){
         if(text[i]=="("){
             pile.push(1)
         }else if(text[i]==")") {
             if(pile.length){
               pile.pop()
             }else {
               return false
             }
         }
      }

      return pile.length==0?true:false
  }


  useEffect(()=>{
       Parenth()
  },[])
  
  return (
    <div ref={ref1} onMouseMove={Supprimer} className='border-[1px] border-black flex justify-center items-center gap-4 w-[400px] h-[400px]'>
         {
            Liste.map((ele,key)=>{

                return <div onMouseMove={()=>{setDrop(true);setIndex(key)}} onMouseLeave={()=>{setDrop(false)}} key={ele.id} className='w-[90px] h-[50px] rounded-[10px]  relative'>
                          <div className= 'w-full hover:bg-blue-300 h-full  rounded-[10px] bg-blue-500 text-white flex justify-center items-center'>{ele.id}</div>
                          {
                            drop==true&&Index==key?
                            <div className='rounded-[10px] w-[200px] h-[200px] absolute top-[50px] left-[50%]'>
                                <div className='bg-[#e0e0e0a2] rounded-[10px] w-full h-full absolute flex flex-col justify-center items-center gap-1.5' style={{transform:"translate(-50%)"}}>
                                    <div className='w-[80%] h-[40px] flex justify-center items-center border rounded-[10px]'>Option1</div>
                                    <div className='w-[80%] h-[40px] flex justify-center items-center border rounded-[10px]'>Option2</div>
                                </div>
                            </div>
                            :<></>
                          }
                       </div>
            })
         }
    </div>
  )
}

export default App922