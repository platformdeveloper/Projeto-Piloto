import React from 'react';

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import MenuButton from '../src/components/MenuButton'


export default function NewBox() {
  return (
    <MainGrid>
    
      <h1></h1>
    
    <Box>
      <h1>Materiais de construção</h1>
      <p>Faça seu orçamento</p>
       
      
        <div className="criaConta">
        <div className="celular">
          <label><span>Texto</span></label>
          <input className="cadastro"></input>
          
        </div>
        <div className="celular">
          <label><span>Arquivos</span></label>
          <input type="file" className="cadastro"></input>
          
        </div>
        </div>
        <div>

        <a  href="">
          <button className="criaConta">
          <span className="criaConta">Enviar</span>
          </button>
        </a>
        </div>
        <div>
       
        </div>
         
    </Box>
    
      <h1></h1>
    
    </MainGrid>
  )
}
