import "./portfolio.scss"

export default function Portfolio() {
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
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Desing</li>
        <li>Branding</li>
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
