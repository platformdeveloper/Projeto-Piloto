import React from 'react';

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import MenuButton from '../src/components/MenuButton'


export default function NewBox() {
  return (
    <MainGrid>
    
      <h1></h1>
    
    <Box>
      <h1>Reinvente seu jeito de morar</h1>
      <h2>Alugue ou compre seu imóvel sem drama</h2>
       
      <div>
        <MenuButton>
          
          <button><span>Cadastrar</span></button>
          <button><span>Comprar</span></button>
         
          </MenuButton>
        </div>
        <div className="group">
        <div className="cidade">
          <label><span>Cidade</span></label>
          <input></input>
        </div>
        <div className="bairro">
          <label><span>Bairro</span></label>
          <input></input>
        </div>
        <div className="fabricante">
          <label><span>Fabricante</span></label>
          <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
        </div>
        <div className="material">
          <label><span>Material</span></label>
          <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
        </div>
        </div>
        <div className="fornecedor">
          <button className="fornecedor">
          <span className="fornecedor">Encontre seu fornecedor</span>
          </button>
        </div>
         
    </Box>
    
      <h1></h1>
    
    </MainGrid>
  )
}


