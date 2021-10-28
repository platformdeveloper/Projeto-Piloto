import React from 'react';

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import MenuButton from '../src/components/MenuButton'
import Link from 'next/link'


export default function NewBox() {
  return (
    <MainGrid>
    
      <h1></h1>
    
    <Box>
      <h1>Reinvente seu Jeito de COMPRAR !!! </h1>
      <p>Faça o Orçamento do seu Material de Costrução para reforma ou construção sem esforço </p>
       
      <div>
        </div>
       <div className="group">
        <div className="nome">
          <label><span>Nome</span></label>
          <input className="cadastro" Placeholder="Seu Nome"></input>
        </div>
        <div className="dados">
          <label><span>E-mail</span></label>
          <input type="email" className="cadastroMeio" Placeholder="exemplo@exemplo.com.br"></input>
          
        </div>
        <div className="dados">
          <label><span>Cep</span></label>
          <input className="cadastroMeio" name="CEP" id="CEP" required pattern="\d{5}-\d{3}" Placeholder="00000-000"></input>
          
        </div>
        <div>
          <a  href="/crieSuaConta">
          <button className="criaConta">
          <span className="criaConta">Cadastrar</span>
          </button>
          </a>
        </div>
        </div>
        
        
      
          
    </Box>
    
      <h1></h1>
    
    </MainGrid>
  )
}


