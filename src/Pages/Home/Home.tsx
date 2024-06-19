import { Fragment } from "react/jsx-runtime"
import Header from "../../Components/Header/Header"
import ImageDisplay from "../../Components/ImageDisplay/ImageDisplay"

const Home = () => {
  return (
    <Fragment>
      <Header logo="Pedro Bellini" bgColor="black" textColor="white" />
      <ImageDisplay
        imagesList={[
          { color: "red" },
          { color: "blue" },
          { color: "green" },
          { color: "yellow" },
        ]}
      />
    </Fragment>
  )
}

export default Home

