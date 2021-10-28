import styled from 'styled-components';

const Box = styled.div`
  background: white;
  opacity: 0.95;
  border-radius: 8px;
  padding: 16px;
  autoHeight:true;
  margin: 30px 0px 0px;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  h1{
    text-align: center;
    margin: 0px 0px 8px;
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
  .nome {
    border:1px solid #E0E0E0;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    max-width: 98.3%;
    ::placeholder {
      color: #e8f1fd;
      opacity: 1;
    }
  }
  .dados {
    border:1px solid #E0E0E0;
    max-width: 100%;
    @media (min-width:960px){
      width: 49%;
      border-bottom-left-radius:8px;
      float: left;
    }
    ::placeholder {
      color: #e8f1fd;
      opacity: 1;
    }
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
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-bottom: 10px;

  
  @media (min-width:960px){
    margin-left: 10%;
    width: 80%;
    justify-content: space-between;
  }
}

.celular {
  border:1px solid #E0E0E0;
  border-radius:8px;
  width: 100%;
  @media (min-width:960px){
    width: 100%;
    float: left;
  }
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
  @media (min-width:960px){
    width: 80%;
    float: left;
  }
  

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
.concluaCadastro{
  width: 100%;
  
}
input.cadastro{
  padding: 10px;
  width: 95%;
  
  border-radius:8px;
  
  
}
input.cadastroMeio{
  padding: 10px;
  width: 90%;
  
  border-radius:8px;
  
  
}
a.codigo{
  text-align: center;
}

`; 

export default Box 