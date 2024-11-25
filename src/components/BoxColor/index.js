import styled from 'styled-components';

const BoxColor = styled.div`
  background: #6775ee;
  opacity: 0.95;
  border-radius: 8px;
  padding: 16px;
  autoHeight:true;
  margin: 30px 0px 0px;
  color:white;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  h1{
    text-align: center;
    margin: 0px 0px 8px;
    color:white;
  }
  h1.cor{
    color:#6775ee;
  }
  p{
    text-align: center;
    margin: 0px 0px 8px;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input{
    border: none;
  }
  .group{
    display: block;
  }
  .group:before,
.group:after {
    content: "";
    display: table;
} 
.group:after {
    clear: both;
}
.group {
     zoom: 1; /* For IE 6/7 (trigger hasLayout) */
     padding: 16px;
     margin-left: 10%;
     margin-top: 10px;
     margin-bottom: 50px;
     margin-right: 10%;
}
label{
    cursor: default;
    margin: 0px;
        display: block;
        color: inherit;
        text-align: inherit;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 1.125rem;
  }
  
.criaConta{
  
  width: 100%;
  display: block;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-bottom: 10px;

}
button.criaConta {
    background-color: white;
    border-color: #6775ee;
    min-width: 48px;
    height: 48px;
    padding: 4px16px;
    border-radius: 8px;
    text-transform: none;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    
    
  
  }
  span.criaConta {
    margin-top: 10px;
    display: block;
    color: #6775ee;
    text-align: inherit;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    
  }
  button.criaConta:hover{
    background-image:none !important;
      background-color:#6775ee !important;
      color:white !important;
  }
  span.criaConta:hover{
    color:white;
  }


`; 

export default BoxColor 