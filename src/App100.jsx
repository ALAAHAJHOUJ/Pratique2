import React, { createContext, useRef } from 'react'
import App101 from './App101';


const elements=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12}]


function App100() {
  const ref1=useRef()
  const ref2=useRef()
  const ref3=useRef(0)

  const tester=()=>{
        ref1.current.style.transform=`translateX(-50%) rotate(${ref3.current}deg)`
        ref3.current+=20
  }


  
  return (
    <div className='b flex justify-center items-center gap-[10px] w-[400px] h-[400px]'>
        <div className='border-black border-[1px] relative w-[200px] h-[200px] rounded-[50%]'>
            <div onClick={tester} className='w-[10px] h-[10px] bg-black absolute top-[50%] left-[50%] element111 rounded-[50%] z-50'></div>
            <div ref={ref1} className='bg-black w-[1px] h-[90px] left-[50%] bottom-[50%] element112 absolute'></div>
            <div ref={ref2} className='bg-red-500 w-[1px] h-[70px] left-[50%] bottom-[50%] absolute'></div>

            {
                elements.map((ele,key)=>{
                    return <div style={{transform:`translateX(-50%) rotate(${ele.id*30}deg)`}} className='absolute left-[50%] bottom-[50%] w-[10px] h-[100px] element112'><div className=" flex justify-center items-center w-full h-[20px] text-[15px] mt-2.5" style={{transform:`rotate(-${ele.id*30}deg)`}}>{ele.id}</div></div>
                })
            }
        </div>
    </div>
  )
}

export default App100