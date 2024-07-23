import React from 'react'
import styled from 'styled-components'
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { Badge } from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import LogoImg from '../images/logo.png'


const Container = styled.div`
  height: 60px;

`
const Wrapper = styled.div`
  padding: 10px 30px; 
  display: flex;
  box-shadow: 0px .2px 3px rgba(0,0,0,0.3);
  
  `

  // **** Logo ****

  const Left = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  position: relative;
  `
  const Logo = styled.img`
    height: 45px;
    margin: 0;  
  `
  const LogoName = styled.h1`
    font-size: 18px;
    font-weight: 900;
    position: absolute;
    left:30px;
    top: 6px;
  `

  // **** Search input ****

  const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center; 
    justify-content: center;
  `
  const SearchContainer = styled.div`
    border: 1px solid #BDBDBD;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 50px;
  `

  const Input = styled.input`
    border: none;
    outline: none;
    padding: 5px;
  `

 // ****** Menus *****

  const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  `
  const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  `

const Navbar = () => {

  return (
   <Container>
    <Wrapper>
      <Left>
        <Logo src={LogoImg} />
        <LogoName>Ashy Apparel</LogoName>      
      </Left>
      <Center>
        <SearchContainer>
          <Input/>
         <SearchOutlined  style={{ color: 'gray' }}/>
        </SearchContainer>
      </Center>
      <Right>
        <MenuItem>Register</MenuItem>
        <MenuItem>Sign In</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
   </Container>
  )
}

export default Navbar
