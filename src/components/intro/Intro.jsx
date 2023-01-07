import { useEffect } from "react"
import "./intro.scss"

export default function Intro() {

  const textRef = useRef();
  useEffect(()=>{
    console.log(textRef)

  },[])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>hi there</h2>
          <h1>Park ji soo</h1>
          <h3>Freelance<span ref = {textRef}>Designer</span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
