import React from 'react'
import Home1 from '../../assets/Home1.png'
import './FirstBlock.css'

const FirstBlock = () => {
  return (
    <section className='container'>
        <div>
          <img className='home1' src={Home1}/>
        </div>
    </section>
  )
}

export default FirstBlock;