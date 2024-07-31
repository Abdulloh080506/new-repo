import React from 'react';
import { Coffee } from '../../../assets/images/icons';
import { Surprise } from '../../../assets/images/icons/index2';
import { Moshina } from '../../../assets/images/icons/index3';
import '../element2/element2.css'

export const Element2 = () => {
  return (
    <div className='element2-container'>
        <div className="element2-mini-container">
            <div className="yozuvlar">
                <h1>Why choose us?</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit </p>
            </div>
            <div className='element2-cards'>
                <div className='cards'>
                    <Coffee />
                    <div className="cards-texts">
                        <h4>Best quality</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipis </p>
                    </div>
                </div>
                <div className='cards'>
                    <Surprise/>
                    <div className="cards-texts">
                        <h4>Exclusive benefits</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing  </p>
                    </div>
                </div>
                <div className='cards'>
                    <Moshina/>
                    <div className="cards-texts">
                        <h4>Free shipping</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Element2