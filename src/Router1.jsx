import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import API2 from './API2';
import Supprimer22 from './Supprimer22';
import Recuperer11 from './recuperer11';
import Ajouter1 from './Ajouter1';
import Tester881 from './Tester881';
import Comp1 from './Comp1';
import Zindex from './zIndex';




function Router1() {


  return (
    <BrowserRouter>
      <Routes>
                <Route path="/" element={<div>HELLO</div>}></Route>
                <Route path='/Ajouter/' element={<API2></API2>}></Route>
                <Route path='/supprimer/' element={<Supprimer22></Supprimer22>}></Route>
                <Route path='/recuperer/' element={<Recuperer11></Recuperer11>}></Route>
                <Route path='/tester/' element={<Tester881></Tester881>}></Route>
                <Route path='/tester11/' element={<Comp1></Comp1>}></Route>
                <Route path='/Zindex/' element={<Zindex></Zindex>}></Route>
                <Route path='*' element={<h2 className='text-[40px] font-bold'>page introuvable</h2>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router1