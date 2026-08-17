import React, { useEffect, useRef, useState } from 'react'

function App22() {
  const [elements,setElements]=useState([{id:1},{id:2},{id:3}])
  const ref1=useRef()
  const ref2=useRef(0)

  const Ajouter=async()=>{
   if(elements.length==10){
       const taille=document.getElementsByClassName("element7").length;
       for(let i=0;i<taille;i++){
          const promise1=new Promise((res,rej)=>{
            setTimeout(() => {
                res("hey")
            }, 200);
          })

          await promise1
          document.getElementsByClassName("element7")[i].style.transition="300ms all"
          document.getElementsByClassName("element7")[i].style.background="green"
          document.getElementsByClassName("element7")[i].style.color="white"
       }

       await new Promise((res,rej)=>{
        setTimeout(() => {
            res("hey")
        }, 1000);
       })

       return setElements([{id:1}])
   }



   setElements((prev)=>{
       return [...prev,{id:prev[prev.length-1].id+1}]
   })
  }



  useEffect(()=>{
      if(elements.length==1){
        document.getElementsByClassName("element7")[0].style.transition="0ms all"
        document.getElementsByClassName("element7")[0].style.backgroundColor="red"
        document.getElementsByClassName("element7")[0].style.color="black"
      }
  },[elements])

  


  function tester(){
    const resultat=[]
    const Aux=[]

    function tester1(){
       
        if(Aux.length==6) resultat.push(Aux.join(""))
        else {
            
            Aux.push("(")
            tester1()
            Aux.pop()

            Aux.push(")")
            tester1()
            Aux.pop()
        
        }
    }


    tester1()

    console.log(resultat)
  }


  function Pratiquer(){
      const tableau=[1,11,61,9,19]
      let Max=Math.abs(tableau[1]-tableau[0])


      for(let i=0;i<tableau.length;i++){
        for(let j=0;j<tableau.length;j++){
            if(Math.abs(tableau[i]-tableau[j])>Max){
                Max=Math.abs(tableau[i]-tableau[j])
            }
        }
      }


  }


  function tester66(){
      if(ref2.current>200) {
        document.getElementById("element9").innerHTML="<button >Renit</button>"
        const element=document.getElementById("element9").children[0].style
        element.backgroundColor="blue"
        element.color="white"
        element.padding="20px"
        element.borderRadius="10px"
        element.marginBottom="60px";
        element.cursor="pointer"
        return 
      }


      ref2.current+=20
      ref1.current.style.transition=`500ms all`
      ref1.current.style.transform=`rotate(${ref2.current}deg)`
  }

  return (

    <>
        <div id='element9'></div>
        <div ref={ref1} onClick={tester66}  className='element5'>
            {
                elements.map((ele,key)=>{
                    return <div key={ele.id} className='bg-red-500 element7 rounded-[10px] flex justify-center items-center '>{ele.id}</div>
                })
            }
        </div>
    </>

  )
}

export default App22