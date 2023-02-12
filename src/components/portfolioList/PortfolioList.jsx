import React from './portfoliolist.scss';

export default function PortfolioList({title,active,setSelected}){
    return (
        <div>
            <li className={active ? "portfolioList active" : "portfolioList"}>
            {title}
            </li>
        </div>
    )
}