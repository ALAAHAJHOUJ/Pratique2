import React, { useEffect, useState } from 'react'

function App31() {
  const [elements,setElements]=useState([{id:1,idParent:1},{id:2,idParent:1},{id:3,idParent:1},{id:4,idParent:2},{id:5,idParent:3}])
  const [DraggedElement,setDraggedElement]=useState(null)
  const [Zone,setZone]=useState(null)


  const Annuler=(event)=>{
    event.preventDefault()
  }

  const Changer=(element)=>{
     if(element==Zone) return 
     
     const element1=elements[DraggedElement];
     

  }

  return (
    <div className='border-black border-[1px] flex justify-center items-center gap-[10px] w-[500px] h-[500px]'>
           <div onDragOver={Annuler} onDrop={()=>{Changer(1)}} className='border-black border-[1px] flex flex-col justify-start items-center w-[130px] h-[80%] box-border p-3 gap-2'>
              {elements.map((ele,key)=>{
                 return ele.idParent==1&&<div key={key} draggable onDragEnd={()=>{setDraggedElement(null)}} onDragStart={()=>{setDraggedElement(key);setZone(ele.idParent)}} className='bg-green-500 text-white flex justify-center items-center w-[90%] h-[60px] rounded-[10px]'>{key}</div>
              })}
           </div> 

           <div onDragOver={Annuler} onDrop={()=>{Changer(2)}} className='border-black border-[1px] flex flex-col justify-start items-center w-[130px] h-[80%] box-border p-3 gap-2'>
              {elements.map((ele,key)=>{
                 return ele.idParent==2&&<div key={key} draggable onDragEnd={()=>{setDraggedElement(null)}} onDragStart={()=>{setDraggedElement(key);setZone(ele.idParent)}} className='bg-green-500 text-white flex justify-center items-center w-[90%] h-[60px] rounded-[10px]'>{key}</div>
              })}
           </div> 

           <div onDragOver={Annuler} onDrop={()=>{Changer(3)}} className='border-black border-[1px] flex flex-col justify-start items-center w-[130px] h-[80%] box-border p-3 gap-2'>
              {elements.map((ele,key)=>{
                 return ele.idParent==3&&<div key={key} draggable onDragEnd={()=>{setDraggedElement(null)}} onDragStart={()=>{setDraggedElement(key);setZone(ele.idParent)}} className='bg-green-500 text-white flex justify-center items-center w-[90%] h-[60px] rounded-[10px]'>{key}</div>
              })}
           </div> 
    </div>
  )
}

export default App31