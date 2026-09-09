import React, { useEffect, useState } from 'react'

function Pratiquer() {

  const [Liste,setListe]=useState([{id:1},{id:2},{id:3}])
  

  const Ajouter=async()=>{
    if(Liste.length==6) {
        const element=document.getElementsByClassName("mee");
        const taille=element.length


        for(let i=0;i<taille;i++){
             const promise1=new Promise((res,rej)=>{
                setTimeout(() => {
                    res("hey")
                }, 200);
             })

             await promise1
             element[i].style.transition="300ms all"
             element[i].style.background="green"
             element[i].style.color="white"
        }

        await new Promise((res,rej)=>{
            setTimeout(() => {
                res("hey")
            }, 300);
        })

        return setListe(()=>{
            return []
        }) 
    }

    setListe((prev)=>{
        if(prev.length==0) return [{id:1}]
        return [...prev,{id:prev[prev.length-1].id+1}]
    })
  }



  return (
    <div onClick={Ajouter} className='border-black border-[1px] flex flex-wrap justify-center items-center gap-[10px] w-[300px] h-[300px]'>
       {
        Liste.map((ele,key)=>{
             return <div key={ele.id} className='bg-red-500 mee rounded-[10px] flex justify-center items-center w-[80px] h-[80px]'>{ele.id}</div>
        })
       }
    </div>
  )
}

export default Pratiquer