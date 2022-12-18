import "./topbar.scss"
import {PeopleAlt ,Mail} from '@material-ui/icons';


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Jisoo.</a>
          <div className="itemContainer">
            <PeopleAlt className="icon" />
            <span>+82 010-7184-9362</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>vkrwltn12@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
         
        </div>
      </div>
    </div>
  )
}
