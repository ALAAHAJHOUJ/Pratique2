import React, { useRef } from 'react'



const elements=[{id:"front"},{id:"back"},{id:"left"},{id:"right"},{id:"top"},{id:"bottom"}]

const couleurs=["red","yellow","green","brown","pink","purple"]

const Aux=[]


function Cube() {

  const ref1=useRef();
  const rotation=useRef(0)

  const tester=()=>{
    rotation.current+=20
    ref1.current.style.transform=`rotateY(${rotation.current}deg) rotateX(${rotation.current}deg)`
  }



  return (
    <div onMouseMove={tester} className='border flex justify-center items-center w-[400px] h-[400px]' id='me1'>
         <div ref={ref1} className=' w-[200px] h-[200px] relative' id='me2'>
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

                 case "bottom":changement="rotateX(-90deg) translateZ(100px)"
               }
               return <div style={{background:`${couleur}`,transform:`${changement}`}} className='w-full h-full absolute flex justify-center items-center text-white opacity-[0.6]' key={ele.id}>{ele.id}</div>
            })
          }
         </div>
    </div>
  )
}

export default Cube