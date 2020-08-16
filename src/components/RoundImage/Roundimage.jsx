import React from 'react'
import styled from 'styled-components'

const StyledRoundImage = styled.img`
  border-radius: 50%;
  height: ${(props) => props.height || '50px'};
  width: ${(props) => props.height || '50px'};
  background-color: ${(props) => props.backgroundColor || '#000'};
`
const RoundImage = (props) => (
  <StyledRoundImage
    src={props.src}
    backgroundColor={props.backgroundColor}
    height={props.height}
    alt={props.alt}
  >
    {props.children}
  </StyledRoundImage>
)

export default RoundImage
