import React from 'react';

import MainGrid from '../src/components/MainGrid'
import BoxColor from '../src/components/BoxColor'
import MenuButton from '../src/components/MenuButton'


export default function NewBoxColor() {
  return (
    <MainGrid>
    
      <h1></h1>
    
    <BoxColor>
      <h1 >Pronto! Enviamos o resultado para seu email</h1>
      
       
      
        <div className="criaConta">
        <a  href="">
          <button className="criaConta">
          <span className="criaConta">Falar por WhatsApp</span>
          </button>
        </a>
        <a  href="">
          <button className="criaConta">
          <span className="criaConta">Entrar no Site</span>
          </button>
        </a>
        </div>
        <div>
       
        </div>
         
    </BoxColor>
    
      <h1></h1>
    
    </MainGrid>
  )
}
