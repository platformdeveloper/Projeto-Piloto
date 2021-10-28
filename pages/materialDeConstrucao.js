import React from 'react';

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import MenuButton from '../src/components/MenuButton'


export default function NewBox() {
  return (
    <MainGrid>
    
      <h1></h1>
    
    <Box>
      <h1 className="cor">Qual o Valor da sua Lista de Material de construção?</h1>
      <p>Descubra o melhor valor para sua lista de compras</p>
       
      
        <div className="criaConta">

        <div className="celular">
          <label><span>Lista de Material</span></label>
          <input type="file" className="cadastro"></input>
          
        </div>
        </div>
        <div>

        <a  href="concluir">
          <button className="criaConta">
          <span className="criaConta">Concluir</span>
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
