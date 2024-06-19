import styled from "styled-components"

export const ImageDisplayContainer = styled.header<{
  direction?: string
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  margin: 0;
  width: 100vw;
`

export const ImageDisplayItem = styled.div<{
  color: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.color || "blue"};
`

