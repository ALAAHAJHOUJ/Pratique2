import React from 'react'

function Ajouter1({ref1,ref2,Envoyer,changer}) {

    
  return (
        <div className='border-black border-[1px] flex flex-col justify-center items-center gap-[10px] w-[300px] h-[300px] flex-wrap'>
              <input ref={ref1} type="text" className='border-black border-[1px] w-[170px] h-[50px] rounded-[10px]' />
              <input ref={ref2} type="text" className='border-black border-[1px] w-[170px] h-[50px] rounded-[10px]'  />
              <button onClick={Envoyer} className='bg-blue-500 text-white rounded-[10px] p-4'>Ajouter</button>
              <button onClick={changer} className='bg-green-400 text-white rounded-[10px] p-4'>Recuperer</button>
         </div>
  )
}

export default Ajouter1