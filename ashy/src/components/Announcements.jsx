import styled from "styled-components"

 

const Container = styled.div`
  height: 30px;
  background-color: orangered;
  color:white;
  font-weight: 700;
  display:flex;
  align-items: center;
  justify-content: center;
`

 const Announcements = () => {
   return (
    <Container>
      Super Promo!  Free Shipping On Orders Above GH300.00
    </Container>
   )
 }
 
 export default Announcements
 