import styled from 'styled-components';
const MenuButton = styled.main`
 

display: flex;
position: relative;
align-items: center;
border-radius: 8px;
margin-left: 25%;
margin-right: auto;

margin-bottom: 8px;
flex-direction: row;
justify-content: center;
gap: 0px;
justify-content: center;
border: 1px solid rgb(224, 224, 224);
width: 50%;

button {
    
    cursor: pointer;
    outline: 0px;
    width: 140px;
    background: none;
    border: 0px;
    
  }
  button:hover{
       
        background-color: #b3d4fc;
        border-radius: 8px;
}
span {
    margin: 0px;
    display: block;
    color: rgb(158, 158, 158);
    text-align: inherit;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    
}
span:hover{
    color: rgb(80, 99, 240);
}
.grid{
    
    justify-content: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
}
}

`;
export default MenuButton; 
