import React, { useEffect, useRef, useState } from 'react'
import Ajouter1 from './Ajouter1';
import Recuperer from './Recuperer';

function API() {
  const ref1=useRef()
  const ref2=useRef();
  const [state1,setState1]=useState("Ajouter")



  const Envoyer=async()=>{
      const valeur1=ref1.current.value;
      const valeur2=ref2.current.value;
       
      try {
          const resultat=await fetch("http://localhost:8080/Ajouter/",{method:"POST",body:JSON.stringify({name1:valeur1,name2:valeur2}),headers:{"Content-Type":"application/json"}});
           
          const resultat1=await resultat.text()

          console.log(resultat1)

      } catch (error) {
          console.log(error)
      }



  }


  return (
        <>
        {
                state1=="Ajouter"?  <Ajouter1 ref1={ref1} ref2={ref2} Envoyer={Envoyer} changer={()=>{setState1("recuperer")}}>

                                     </Ajouter1>:<></>

        }

        {
                state1=="recuperer"?<Recuperer></Recuperer>:<></>
        }
        </>


  )
}

export default API