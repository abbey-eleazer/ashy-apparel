import styled from "styled-components"


const Container = styled.div`
  flex:1;
  margin: 10px;
  height: 50vh;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #E0E0E0  
` 
const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-weight: 900;
  text-shadow: 0px .5px 3px rgba(0,0,0,0.5);

`
const Button = styled.button`
  border: none;
  padding:10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  border-radius:5px;
  font-weight:800;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Text>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Text>
    </Container>
  )
}

export default CategoryItem
