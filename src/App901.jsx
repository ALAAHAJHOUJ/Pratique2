import React, { useRef, useState } from 'react'

function App901() {
  const ref1=useRef();
  const rotation=useRef(0);
  const [liste,setListe]=useState([{id:1}])


  const tester=()=>{
       rotation.current+=10
       ref1.current.style.transform=`rotate(${rotation.current}deg)`
  }

  const Ajouter=()=>{
    if(liste.length==30) return 
    setListe((prev)=>{
      return [...prev,{id:prev[prev.length-1].id+1}]
    })
  }


  const tester1=async()=>{
    for(let i=0;i<10;i++){
          const promise1=new Promise((res,rej)=>{
            console.log("tester")
             setTimeout(() => {
                res("hey")
             }, 1000);
          })

          await promise1
    }
  }

  return (
    <div className='flex flex-col justify-center items-center gap-[20px]'>
        <div  onClick={()=>{setListe([{id:1}]);tester1()}} className='bg-blue-500 cursor-pointer text-white w-[100px] h-[60px] flex justify-center items-center rounded-[10px]'>Refresh</div>
        <div onClick={Ajouter} ref={ref1} className="border-black border-[1px] w-[400px] h-[400px] mee1">
            {
              liste.map((ele,key)=>{
                return <div key={ele.id} className='bg-green-500 flex justify-center items-center text-white'>{ele.id}</div>
              })
            }
        </div>
    </div>

  )
}

export default App901