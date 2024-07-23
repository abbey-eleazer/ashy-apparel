import SearchOutlined from "@mui/icons-material/SearchOutlined"
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined"
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "styled-components"


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(251, 140, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 15px;
  min-width: 250px;
  height: 300px;
  overflow: hidden;
  display:flex;
  align-items:center;
  justify-content: center;
  border-radius: 6px;
  box-shadow: 0px .1px 3px rgba(0,0,0,0.2);
  position: relative;
  

  &:hover ${Info} {
    opacity: 1;
  }
`
const Image = styled.img`
  height: 75%;
`
const Icon = styled.div`
  width:40px;
  height:40px;
  border-radius: 50%;
  background-color: white;
  display:flex;
  align-items:center;
  justify-content: center;
  margin: 5px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #eee;
    transform: scale(1.1);
    box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
  }
`


const ProductItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
        <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default ProductItem
