import styled from "styled-components"

export const HeaderContainer = styled.header<{
  bgColor?: string
  textColor?: string
}>`
  background-color: ${(props) => props.bgColor || "blue"};
  display: flex;
  justify-content: space-between;
  text-align: center;
  height: 80px;
  color: ${(props) => props.textColor || "white"};
  margin: 0;
  width: 100vw;
`

export const HeaderItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

