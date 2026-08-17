import { useEffect, useRef, useState } from 'react'
import './App.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { duration } from '@mui/material';


function App() {

  const [state1,setState1]=useState(0);
  const ref1=useRef()
  const [supprimer,setSupprimer]=useState(false)

  const changer=(element)=>{
      setState1((prev)=>{
            if(element=="gauche")
            {
                if(prev==0) {
                    return 2;
                }else {
                    const nombre=prev-1;
                    return nombre
                }
            }
            else {
                if(prev==2){
                    return 0;
                }else {
                  const nombre=prev+1;
                  return nombre
                }
            }

      })

  }

  const changer777=(element)=>{
      ref1.current.style.transform=`rotate(${element}deg)`
  }

  const Traiter=()=>{
    setSupprimer((prev)=>{
        return !prev
    })
  }


  return (
      <>

        <div onClick={Traiter} className='bg-blue-500 rounded-[10px] hover:bg-blue-300 cursor-pointer w-[100px] h-[60px] text-white font-bold flex justify-center items-center'>
            {
                supprimer==false?"Supprimer":"Afficher"
            }
        </div>


        {
        supprimer==false?      
        <div ref={ref1} className='flex justify-center items-center gap-[20px] w-[400px] h-[400px] transition-all duration-700'>
           <div onClick={()=>{changer("gauche")}} className='bg-[#4c4848] hover:bg-gray-400 w-[70px] h-[70px] rounded-[35px] text-white flex justify-center  items-center'>
                <FaArrowLeft size={20}></FaArrowLeft>
           </div>

           <div onMouseEnter={()=>{changer777(45)}} onMouseLeave={()=>{changer777(0)}} className=' rounded-[10px] overflow-hidden w-[250px] h-[250px] relative element1'>
              {
                  state1==0?<motion.img initial={{opacity:0}} animate={{opacity:1}} className='w-full absolute right-0 top-0' transition={{duration:1}} src='/Illustration.png'></motion.img>:<></>
              }

              {
                  state1==1?<motion.img initial={{opacity:0}} animate={{opacity:1}} className='w-full h-full absolute right-0 top-0' transition={{duration:1}} src="/image.jpg"></motion.img>:<></>
              }

              {
                  state1==2?<motion.img initial={{opacity:0}} animate={{opacity:1}} className='w-full absolute right-0 top-0' transition={{duration:1}} src='/vite.svg'></motion.img>:<></>
              }
           </div>

           <div onClick={()=>{changer("droite")}} className='bg-[#4c4848] hover:bg-gray-400 w-[70px] h-[70px] rounded-[35px] text-white flex justify-center items-center'>
                <FaArrowRight size={20}></FaArrowRight>
           </div>
        </div>:<></>
        }

      </>


  )
}

export default App
