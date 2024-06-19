import { IHeader } from "./Header.types"
import { HeaderContainer, HeaderItem } from "./styles"

const Header = ({ logo, bgColor, textColor }: IHeader) => {
  return (
    <HeaderContainer bgColor={bgColor} textColor={textColor}>
      <HeaderItem></HeaderItem>
      <HeaderItem>{logo}</HeaderItem>
      <HeaderItem></HeaderItem>
    </HeaderContainer>
  )
}

export default Header

