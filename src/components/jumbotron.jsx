import React from "react";
import Iphone14 from "../assets/images/iphone-14.jpg";
import Iphonehand from "../assets/images/iphone-hand.png"

function Jumbotron() {
   const handle =() =>{
    const element = document.querySelector(".sound-section");
    window.scrollTo({
        top : element?.getBoundingClientRect().top,
        left: 0,
        behavior : 'smooth'

    })
}

    return ( 

        <div className="jumbotron-section wrapper">
            <h2 className="title">New</h2>
            <img className="logo" src={Iphone14} alt="iphone 14 pro" />
            <p className="text"> Big & Bigger</p>
            <span className="description">
                From $41.60/mo. for 24mo. or $999 before trade-in
            </span>
            <ul className="links">
                <li>
                    <button className="button">Buy</button>
                </li>
                <li>
                    <a onClick={handle} className="link">Learn more</a>
                </li>
            </ul>
            <img className="iphone-img" src={Iphonehand} alt="Iphone In Hand" />
        </div>
     );
}

export default Jumbotron;