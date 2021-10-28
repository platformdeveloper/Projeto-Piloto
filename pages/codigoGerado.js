import React from 'react';

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import MenuButton from '../src/components/MenuButton'


export default function NewBox() {
  return (
    <MainGrid>
    
      <h1></h1>
    
    <Box>
      <h1>Digite o código de acesso</h1>
      <p>Insira o código de 6 dígitos que enviamos no número +5531996208806</p>
       
      
        <div className="criaConta">
        <div className="celular">
          <label><span>Código</span></label>
          <input className="cadastro" placeholder="00000"></input>
          
        </div>
        <a className="codigo" href=""> Não recebi o código</a>
        </div>
        <div>

        <a  href="/materialDeConstrucao">
          <button className="criaConta">
          <span className="criaConta">Confirmar</span>
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
