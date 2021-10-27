import React from 'react';

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import MenuButton from '../src/components/MenuButton'


export default function NewBox() {
  return (
    <MainGrid>
    
      <h1></h1>
    
    <Box>
      <h1>Acesse ou crie sua conta</h1>
      <p>Digite seu celuLar para entrar. Seus dados estão seguros e você não precisa de senha.</p>
       
      
        <div className="criaConta">
        
        
        
        <div className="pais">
          <label><span>País</span></label>
          <input className="pais" ></input>
        </div>
        <div className="ddd">
          <label><span>DDD</span></label>
          <input className="ddd" placeholder="+23"
  pattern="+-[0-9]{3}"></input>
        </div>
        <div className="celular">
          <label><span>Celular</span></label>
          <input></input>
        </div>
        </div>
        <div className="fornecedor">
          <button className="criaConta">
          <span className="criaConta">Receber código por SMS</span>
          </button>
        </div>
        <div className="fornecedor">
          <button className="criaConta">
          <span className="criaConta">Receber código por WhatsApp</span>
          </button>
        </div>
         
    </Box>
    
      <h1></h1>
    
    </MainGrid>
  )
}


