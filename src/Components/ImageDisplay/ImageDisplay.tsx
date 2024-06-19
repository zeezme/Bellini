import { IHeader } from "./ImageDisplay.types"
import { v4 } from "uuid"
import { ImageDisplayContainer, ImageDisplayItem } from "./styles"

const ImageDisplay = ({ imagesList }: IHeader) => {
  return (
    <ImageDisplayContainer direction="row">
      {imagesList.map((image) => (
        <ImageDisplayItem color={image.color} key={v4()}></ImageDisplayItem>
      ))}
    </ImageDisplayContainer>
  )
}

export default ImageDisplay

