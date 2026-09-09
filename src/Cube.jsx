import React, { useEffect, useRef } from 'react'

import {FaArrowAltCircleLeft} from 'react-icons/fa'

const elements=[{id:"front"},{id:"back"},{id:"left"},{id:"right"},{id:"top"},{id:"bottom"}]

const couleurs=["red","yellow","green","brown","pink","purple"]

const Aux=[]


function Cube() {

  const ref1=useRef();
  const rotation=useRef(0);
  const ref5=useRef({X:0,Y:0})
  const intervalle=useRef()
  const arreter=useRef(false)
 
  const tester=(element)=>{
    return 

    switch(element){
      case "right":  ref5.current.Y+=20;break

      case "bottom":  ref5.current.X-=20;break

      case "left" :  ref5.current.Y-=20;break

      case "top":  ref5.current.X+=20;break


    }

    console.log(ref5.current)
    ref1.current.style.transform=`rotateX(${ref5.current.X}deg) rotateY(${ref5.current.Y}deg)`
  }


  const initialiser=()=>{
     clearInterval(intervalle.current)
  }



  useEffect(()=>{
     
     let X=0
     let Y=0
     intervalle.current=setInterval(() => {
       ref1.current.style.transform=`rotateX(${X}deg) rotateY(${Y}deg)`
       X+=10
       Y+=10
     }, 200);
  },[])

  return (
    <>
      <div className='w-[700px] h-[700px] flex justify-center items-center relative'>
          <div  className='flex justify-center items-center w-full h-[80px] absolute top-0 right-0'>
             <FaArrowAltCircleLeft onClick={()=>tester("top")} className='hover:text-[gray] hover:scale-[1.3] transition-all duration-700 cursor-pointer'  size={40} style={{transform:"rotate(90deg)"}}></FaArrowAltCircleLeft>
          </div>
          <div  className='flex justify-center items-center w-full h-[80px] absolute bottom-0'>
            <FaArrowAltCircleLeft onClick={()=>tester("bottom")} className='hover:text-[gray] hover:scale-[1.3] transition-all duration-700 cursor-pointer' size={40} style={{transform:"rotate(-90deg)"}}></FaArrowAltCircleLeft>
          </div>
          <div  className='flex justify-center items-center w-[80px] h-full absolute right-0 top-0'>
            <FaArrowAltCircleLeft onClick={()=>tester("right")} className='hover:text-[gray] hover:scale-[1.3] transition-all duration-700 cursor-pointer' size={40} style={{transform:"rotate(180deg)"}}></FaArrowAltCircleLeft>
          </div>
          <div  className='flex justify-center items-center w-[80px] h-full absolute left-0 top-0'>
            <FaArrowAltCircleLeft onClick={()=>tester("left")} className='hover:text-[gray] hover:scale-[1.3] transition-all duration-700 cursor-pointer' size={40} style={{transform:"rotate(0deg)"}}></FaArrowAltCircleLeft>
          </div>
          <div className='border flex justify-center items-center w-[400px] h-[400px]' id='me1' >
            <div onClick={initialiser} ref={ref1} className=' w-[200px] h-[200px] relative transition-all duration-700' id='me2'>
              {
                elements.map((ele,key)=>{
                  let Index=Math.floor((Math.random()*7))
                  while(Aux.includes(Index)){
                      Index=Math.floor((Math.random()*7))
                  }

                  Aux.push(Index)
                  const couleur=couleurs[Index]

                  let changement;
                  
                  switch(ele.id){
                    case "front": changement="translateZ(100px)";break;

                    case "back":changement="translateZ(-100px)";break;

                    case "right":changement="rotateY(90deg) translateZ(100px)";break

                    case "left":changement="rotateY(-90deg) translateZ(100px)";break

                    case "top":changement="rotateX(90deg) translateZ(100px)";break

                    case "bottom":changement="rotateX(-90deg) translateZ(100px)";


                  }
                  return <div style={{background:`${couleur}`,transform:`${changement}`}} className='w-full h-full absolute flex justify-center items-center text-white opacity-[0.6]' key={ele.id}>{ele.id}</div>
                })
              }
            </div>
        </div>
      </div>
    </>

  )
}

export default Cube