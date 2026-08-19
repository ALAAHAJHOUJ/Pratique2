import React, { useState } from 'react'

function App88() {
  const [elements,setElements]=useState([{idparent:1},{idParent:1},{idParent:2}])

  const Tester=async()=>{
     for(let i=0;i<10;i++){
          const promise1=new Promise((res,rej)=>{
            setTimeout(() => {
              res("hey I'm resolved")
            }, 1000);
          })
         await promise1
         const element=document.getElementsByClassName("element")[0]
         element.innerHTML+="<div style='width:50px;height:50px;background:red;border-radius:10px'></div>"
     }
  }

  return (
    <div onClick={Tester} className='border element flex justify-center gap-[10px] items-center w-[300px] h-[300px] flex-wrap'>

    </div>
  )
}

export default App88