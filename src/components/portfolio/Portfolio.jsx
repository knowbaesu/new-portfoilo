import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"

export default function Portfolio() {
  const [selected, setSelected] = useState("one")
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id:"Web",
      title:"Web App",
    },
    {
      id:"mobile",
      title:"Mobile App",
    },
    {
      id:"design",
      title:"Design",
    },
    {
      id:"Content",
      title:"Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>{
                <PortfolioList title={item.title} active={selected===item.id}/>
        })}
      </ul>
      <div className="container">
        <div className="item">
          <img src="" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
          </div>
  )
}
