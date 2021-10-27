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
  h2{
    align:"inherit";
    text-align: center;
    bold:undefined;
    color:"#757575";
    gutterBottom:false;
    inline:false;
    nowrap:false;
    margin: 0px 0px 8px;
  }
  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 20px;
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
}
  .cidade {
    border:1px solid #E0E0E0;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    max-width: 100%;
    ::placeholder {
      color: #e8f1fd;
      opacity: 1;
    }
  }
  .bairro {
    border:1px solid #E0E0E0;
    max-width: 100%;
    @media (min-width:960px){
      width: 50%;
      border-bottom-left-radius:8px;
      float: left;
    }
    ::placeholder {
      color: #e8f1fd;
      opacity: 1;
    }
  }
  .fabricante {
    border:1px solid #E0E0E0;
    width: 50%;
    border-bottom-left-radius:8px;
    float: left;
    @media (min-width:960px){
      width: 25%;
      border-bottom-left-radius:0px;
      float: left;
    }
 
  }
  .material {
    border:1px solid #E0E0E0;
    width: 48.5%;
    border-bottom-right-radius:8px;
    float: right;
    @media (min-width:960px){
      width: 24.1%;
      float: left;
      
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
  .fornecedor{
    justify-content: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
button.fornecedor {
    margin-left: 15%;
    margin-right: 15%;
    background-color: rgb(80, 99, 248);
    color: rgb(255, 255, 255);
    min-width: 48px;
    height: 48px;
    padding: 4px16px;
    border-radius: 8px;
    text-transform: none;
    cursor: pointer;
    @media (min-width:960px){
      margin-left: 25%;
    margin-right: 25%;
      
    }
    
  }
  span.fornecedor {
    
    display: block;
    color: white;
    text-align: inherit;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    
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
.pais {
  border:1px solid #E0E0E0;
  width: 49%;
  border-radius:8px;
  float: right;
  @media (min-width:960px){
    width: 18%;
    float: left;
    
  }
}
.ddd {
  border:1px solid #E0E0E0;
  border-radius:8px;
  width: 49%;
  float: left;
  @media (min-width:960px){
    width: 18%;
    float: left;
  }
}
.celular {
  border:1px solid #E0E0E0;
  border-radius:8px;
  width: 100%;
  @media (min-width:960px){
    width: 60%;
    float: left;
  }
}
button.criaConta {
  
  width: 50%;
  background-color: white;
  border-color: #6775ee;
  min-width: 48px;
  height: 48px;
  padding: 4px16px;
  border-radius: 8px;
  text-transform: none;
  cursor: pointer;
  @media (min-width:960px){
    margin-left: 25%;
  margin-right: 25%;
    
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
  padding: 16px;
  width: 100%;
  border:1px solid #E0E0E0;
  border-radius:8px;
  
  
}
cadastroRadio{
  width:40%;
  float: left;
  margin right:50%;
}
`; 

export default Box 