import "./styles/loader.css"
import loaderImg from "../assets/reactLoader.gif"
const Loader = () => {
  return (
    <div className="loader" >
      <img src={loaderImg} alt="loader" />
    </div>
  )
}

export default Loader
