import styled from "styled-components"
import ArrowBackIosOutlined from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlined from "@mui/icons-material/ArrowForwardIosOutlined";
import { sliderItems } from "../data";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px .5px 1px .5px rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${props => props.slideIndex * -100}vw)
`
const Slide = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: ${props=>props.bg}
`
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `
  
  const Image = styled.img`
  width: 58%;
  height: 90%;
  `
const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  `

const Title = styled.h1`
  font-size: 70px;
  padding-right: 50px;
  `
const Desc = styled.p`
  font-size: 20px;
  margin: 50px 0px; 
  font-weight: 500;
  letter-spacing: 2.5px;  
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowBackIosOutlined />
      </Arrow>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}  key={item.id} >
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <TextContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </TextContainer>
          </Slide>
        ))}
        </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
