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
        <div className="celular">
          <label><span>Celular</span></label>
          <input className="cadastro" type="tel" placeholder="01-24567-8910" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
       required></input>
        </div>
        </div>
        <div>
        <a  href="/codigoGerado">
          <button className="criaConta">
          <span className="criaConta">Receber código por SMS</span>
          </button>
        </a>
        </div>
        <div>
        <a  href="/codigoGerado">
          <button className="criaConta">
          <span className="criaConta">Receber código por WhatsApp</span>
          </button>
          </a>
        </div>
         
    </Box>
    
      <h1></h1>
    
    </MainGrid>
  )
}


