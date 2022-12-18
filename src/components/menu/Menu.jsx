import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active") }>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li >
                <a href="#portfolio">portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Works</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">testimonials</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
