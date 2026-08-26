import React, { useEffect, useRef, useState } from 'react'
import { GiSandsOfTime } from "react-icons/gi";



function App444() {

  const [elements,setElements]=useState([{id:"element1",status:"zone1"},{id:"element2",status:"zone2"},{id:"element3",status:"zone1"},{id:"element4",status:"zone1"}])
  const [draggedElement,setDraggedElement]=useState(null)
  const [zone,setZone]=useState(null)
  const [dragging,setDragging]=useState(false)

  const OndragOver=(e)=>{
    e.preventDefault()
  }


  const filtrer=(element1)=>{
      return elements.filter((ele,key)=>{
         return ele.status==element1
      })
  }



  const affecter=(element,zone2)=>{
    setDragging(true)
    setDraggedElement(element);
    setZone(zone2)
  }



  const supprimer=(Aux,Index)=>{
     for(let i=Index;i<Aux.length-1;i++){
         Aux[i]=Aux[i+1]
     }

     Aux.pop()
  }


  const Trouver=(Aux)=>{
     for(let i=0;i<Aux.length;i++){
         if(Aux[i].id==draggedElement) supprimer(Aux,i)
     }

     
  }


  const OnDrop=(Zone)=>{
      setDragging(false)
      if(Zone==zone) return 


      const Aux=structuredClone(elements);
      Trouver(Aux)
     
      Aux.push({id:draggedElement,status:Zone})

      setElements(Aux)
      


      setElements(Aux)
 

      setDraggedElement(null)
      setZone(null)

  }
  
  return (
    <div className='border-[1px] border-black flex flex-wrap justify-center items-center gap-[10px] w-[400px] h-[400px] rounded-[10px] pb-4'>   
       <div className='w-full h-[40px] mb-3 text-center flex justify-center gap-[0px] items-center'>
          {
            dragging==false?"":<><span className='font-bold text-[30px]'>Dragging</span><GiSandsOfTime size={30}></GiSandsOfTime></>
          }
       </div>   
       <div onDragOver={OndragOver} onDrop={()=>OnDrop("zone1")}  className='border-black border-[1px] flex flex-col justify-start items-center box-border pt-3 gap-[10px] w-[40%] h-[300px]'>
             {
             filtrer("zone1").map((ele,key)=>{
                return <div draggable onDragStart={()=>{affecter(ele.id,"zone1")}} key={ele.id} className='bg-green-400 text-white w-[90%] h-[40px] rounded-[10px] flex justify-center items-center'>{ele.id}</div>
             })
             }
       </div>


       <div onDragOver={OndragOver}  onDrop={()=>OnDrop("zone2")} className='border-black border-[1px] flex flex-col justify-start items-center box-border pt-3 gap-[10px] w-[40%] h-[300px]'>
             {filtrer("zone2").map((ele,key)=>{
                return <div draggable onDragStart={()=>{affecter(ele.id,"zone2")}} key={ele.id} className='bg-green-400 text-white w-[90%] h-[40px] rounded-[10px] flex justify-center items-center'>{ele.id}</div>
             })}
       </div>
    </div>
  )
}

export default App444