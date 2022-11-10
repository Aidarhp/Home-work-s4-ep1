import React from "react";
import Home2 from '../../assets/home2.png'
import './SecondBlock.css'

const SecondBlock = () => {
    return (
        <section className="container">
            <div>
                <img className="home2" src={Home2}/>
            </div>
        </section>
    )
}

export default SecondBlock;