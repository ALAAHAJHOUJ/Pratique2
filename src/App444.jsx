import React, { useEffect, useState } from 'react'

function App444() {
  const [elements,setElements]=useState([{id:0,idParent:1},{id:1,idParent:1},{id:2,idParent:2},{id:3,idParent:1}])
  const [draggedElement,setDraggedElement]=useState(null)
  const [Zone,setZone]=useState(null)



  const Filtrer=(element)=>{
    return elements.filter((ele,key)=>{
      return ele.idParent==element;
    }).map((ele,key)=>{
      return <div draggable onDragStart={()=>{setDraggedElement(key);setZone(element)}} key={key} className='bg-green-400 text-white w-[90%] h-[50px] rounded-[10px] flex justify-center items-center'>{ele.idParent}</div>
    })
  }



  const effectuer=(zone1)=>{
        
       if(zone1==Zone) return 
       const element1=elements[draggedElement];
       
       const Aux=Supprimer(draggedElement)
       element1.idParent=zone1

              
       Aux.push(element1)

       console.log(Aux)

       setElements(Aux)
       
  }



  const Supprimer=(index)=>{
      const tableau=[...elements]
      for(let i=index;i<tableau.length-1;i++){
          elements[i]=elements[i+1]
      }

      tableau.pop()

      return tableau
  }

  
  return (
    <div className='border-[1px] border-black flex justify-center items-center gap-[10px] w-[400px] h-[400px]'>
      <div id='1' onDragOver={(e)=>e.preventDefault()} onDrop={()=>{effectuer(1)}} className='border-[1px] border-black flex gap-[10px] flex-col justify-start items-center w-[100px] h-[80%] p-3'>
        {
           Filtrer(1)
        }
      </div>

      <div id='2' onDragOver={(e)=>e.preventDefault()} onDrop={()=>{effectuer(2)}} className='border-[1px] border-black flex gap-[10px] flex-col justify-start items-center w-[100px] h-[80%] p-3'>
        {
          Filtrer(2)
        }
      </div>
    </div>
  )
}

export default App444