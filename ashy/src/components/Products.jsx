import styled from "styled-components"
import {products} from '../data'
import ProductItem from "./Product"


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 50px;
  width: 80vw;
  margin:10px auto;
 
`

const Products = () => {
  return (
    <Container>
      {products.map( item => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products
