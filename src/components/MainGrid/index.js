import styled from 'styled-components';
const MainGrid = styled.main`

width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
 
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }
  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: 
      "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 150px 1fr 150px;
  }
`;
export default MainGrid; 
