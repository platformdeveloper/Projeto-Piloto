import React from 'react';

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import MenuButton from '../src/components/MenuButton'


export default function NewBox() {
  return (
    <MainGrid>
    
      <h1></h1>
    
    <Box>
      <h1>Conclua seu cadastro</h1>
      
       
      
    <div className="criaConta">
        <div className="concluaCadastro">
          <label><span>Nome Completo</span></label>
          <input class="cadastro"></input>
        </div>
       <div class="cadastroRadio">
       <label for="cpf">cpf</label>
        <input  type="radio" id="html" name="fav_language" value="HTML"></input>
        </div>
        <div class="cadastroRadio">
        <label  for="cnpj">cnpj</label>
        <input  type="radio" id="css" name="fav_language" value="CSS"></input>
       </div>
        <div className="concluaCadastro">
          <label><span>Cpf</span></label>
          <input class="cadastro"></input>
        </div>
    </div>
        <p>Para receber o orçamento, você precisa completar seu cadastro.</p>
        
          <button className="criaConta">
          <span className="criaConta">confirmar</span>
          </button>
       
         
    </Box>
    
      <h1></h1>
    
    </MainGrid>
  )
}