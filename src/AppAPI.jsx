import React, { useEffect, useRef, useState } from 'react'

function AppAPI() {
  const [state1,setState1]=useState("Ajouter");

  return (
    <>
       {state1=="Ajouter"?<Ajouter changer={()=>{setState1("recuperer")}} changer1={()=>{setState1("supprimer")}}></Ajouter>:<></>}
       {state1=="recuperer"?<Recuperer changer2={()=>{setState1("Ajouter")}} changer1={()=>{setState1("supprimer")}}></Recuperer>:<></>}
       {state1=="supprimer"?<Supprimer changer1={()=>{setState1("Ajouter")}} changer2={()=>{setState1("recuperer")}}></Supprimer>:<></>}
    </>
  )
}

export default AppAPI





function Ajouter({changer,changer1}){
        const ref1=useRef();
        const ref2=useRef();

        const Envoyer=async()=>{
            try {
                 const resultat1=await fetch("http://localhost:8080/Ajouter/",{method:"POST",body:JSON.stringify({name1:ref1.current.value,name2:ref2.current.value}),headers:{"Content-Type": "application/json"}})
                 
                 const resultat2=await resultat1.text()
            
                 console.log(resultat2)

                } catch (error) {
                console.log(error)
            }
        }


        return <div className='border-black border-[1px] flex flex-col justify-center items-center box-border p-9  gap-[20px] w-[400px] min-h-[400px]'>
             <span className='text-[40px] font-bold'>Ajouter</span>
             <input ref={ref1} type="text" className='border rounded-[10px] w-[70%] h-[50px] box-border pl-3.5 shrink-0' placeholder='entrer le premier element' />
             <input ref={ref2} type="text" className='border rounded-[10px] w-[70%] h-[50px] box-border pl-3.5 shrink-0' placeholder='entrer le deuxieme element' />
         
             <button onClick={Envoyer} className='bg-blue-500 hover:bg-blue-300 cursor-pointer shrink-0 text-white w-[100px] h-[50px] flex justify-center items-center rounded-[10px] font-bold'>Ajouter</button>
             <button onClick={changer} className='bg-green-400 hover:bg-green-200 cursor-pointer shrink-0 text-white w-[100px] h-[50px] flex justify-center items-center rounded-[10px] font-bold'>Liste</button>
             <button onClick={changer1} className='bg-red-500 hover:bg-red-200 cursor-pointer shrink-0 text-white w-[100px] h-[50px] flex justify-center items-center rounded-[10px] font-bold'>Supprimer</button>

        </div>
}



function Recuperer({changer1,changer2}){
        const [liste,setListe]=useState([])


        const Envoyer=async()=>{
            try {
                const resultat1=await fetch("http://localhost:8080/recuperer1/")

                const resultat2=await resultat1.json()

                console.log(resultat2)

                setListe(resultat2)

            } catch (error) {
                console.log(error)
            }
        }

        useEffect(()=>{
              Envoyer()
        },[])
  
        return <>

                <div className=' mb-3 w-full flex justify-center gap-4'>
                   <button onClick={changer1} className='bg-red-500 font-bold cursor-pointer hover:bg-red-200 text-white w-[120px] h-[50px] rounded-[10px] '>Supprimer</button>
                   <button onClick={changer2} className='bg-green-400 font-bold cursor-pointer hover:bg-green-200 text-white w-[120px] h-[50px] rounded-[10px] '>Ajouter</button>
                </div>
                <div className='border-black border-[1px] p-7 flex flex-wrap justify-center content-start gap-[10px] w-[400px] min-h-[400px]'>

                    <span className='text-[40px] font-bold'>Liste</span>
                    {
                                liste.length==0?<div className='w-full text-center'>la liste est vide</div>:<></>
                    }
                    {
                                liste.map((ele,key)=>{
                                    return <div className='border w-[90%] h-[50px] flex justify-center items-center' key={ele.id}>{`id:${ele.id},name1:${ele.name1},name2:${ele.name2}`}</div>
                                })
                    }


                </div>  

        </>

}

function Supprimer(){
        const ref1=useRef()

        const Envoyer=async()=>{
            if(ref1.current.value<=0) return 

            try {
                const resultat1=await fetch("http://localhost:8080/supprimer1/"+ref1.current.value,{method:"DELETE"})
                
                const resultat2=await resultat1.text()

                console.log(resultat2)

            } catch (error) {
                console.log(error)
            }
        }

        return <div className='border-black border-[1px] flex flex-col justify-center items-center gap-[10px] w-[400px] h-[400px]'>
             <span className='text-[40px] font-bold'>Supprimer</span>
             <input ref={ref1} type="number" className='border rounded-[10px] h-[50px] w-[50px]' />    
             <button onClick={Envoyer} className='bg-red-500 hover:bg-red-200 cursor-pointer text-white w-[100px] h-[50px] rounded-[10px] flex justify-center items-center'>Supprimer</button>   
        </div>  
}