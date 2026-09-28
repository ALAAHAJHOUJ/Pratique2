import React, { useContext, useEffect } from 'react'
import { context1 } from './Context111'

function Context112() {
  const getContext=useContext(context1)


  const Afficher=()=>{
    getContext("donnesgdgdgdg")
  }

  const tester=()=>{
     for(let i=0;i<10;i++){
        setTimeout(() => {
            console.log(i)
        }, 2000);
     }
  }


  return (
    <div onClick={tester}>Context112</div>
  )
}

export default Context112