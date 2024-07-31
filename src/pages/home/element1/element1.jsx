import React from 'react'
import CollectionBG from '../../../assets/images/Group 13.png';
import Coffee1 from '../../../assets/images/kopi1 copy.png';
import Coffee2 from '../../../assets/images/kopi2.png';
import Coffee3 from '../../../assets/images/kopi3.png';
import Coffee4 from '../../../assets/images/kopi4.png';
import '../element1/element.css'

export const Element1 = () => {
  return (
    <div className='element1-container'>
        <div className='element1-mini-container'>
            <div className='collection'>
                <h1>our collection</h1>
            </div>
            <div className='coffees-cards'>
                <div className="cards">
                    <img src={Coffee1} alt="" />
                    <div className="links-p">
                        <p className='p1'>Gran Espresso</p>
                        <p className='p2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eligendi deserunt</p>
                    </div>
                </div>
                <div className="cards">
                    <img src={Coffee2} alt="" />
                    <div className="links-p">
                        <p className='p1'>Planalto</p>
                        <p className='p2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus veniam velit ex,</p>
                    </div>
                </div>
                <div className="cards">
                    <img src={Coffee3} alt="" />
                    <div className="links-p">
                        <p className='p1'>Piccolo</p>
                        <p className='p2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil eveniet, quos exe.</p>
                    </div>
                </div>
                <div className="cards">
                    <img src={Coffee4} alt="" />
                    <div className="links-p">
                        <p className='p1'>Danche</p>
                        <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure quibusdam illum consequuntur</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Element1;