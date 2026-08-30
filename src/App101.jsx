import React, { useContext, useEffect } from 'react'

function App101() {



  const tester=async()=>{
    const date1=new Date();

    
    await new Promise((res,rej)=>{
        setTimeout(() => {
            res("hey")
        }, 6000);
    })

    const date2=new Date();
    console.log(Math.floor((date2.getTime()-date1.getTime())/1000))

  }

  return (
    <div onClick={tester} className='border-black border-[1px] flex flex-wrap justify-center items-center w-[80px] h-[80px]'>
        <span className='text-red-500'></span>
        <span className='text-green-400'></span>
    </div>
  )
}

export default App101