import React from 'react'
import '../aboutelement3/style.css';
import UK from '../../../assets/images/Combined Shape (1).png';
import Canada from '../../../assets/images/Combined Shape (2).png';
import Australia from '../../../assets/images/Combined Shape (3).png';

export const AboutElement3 = () => {
  return (
    <div className='element3-container'>
        <div className="mini-container">
            <h1 className='h1'>Our headquarters</h1>
            <div className='box'>

                <div className="card">
                    <img src={UK} alt="" />
                    <h1>United Kingdom</h1>
                    <div className="p">
                        <p>68 Asfordby Rd</p>
                        <p>Alcaston</p>
                        <p>SY6 1YA</p>
                        <p>+44 1241 918425</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Canada} alt="" />
                    <h1>Canada</h1>
                    <div className="p">
                        <p>1526 Englinton Avenue</p>
                        <p>Toronto</p>
                        <p>Ontario M4P 1A6</p>
                        <p>+1 416 485 2997</p>
                    </div>
                </div>
                <div className="card">
                    <img src={Australia} alt="" />
                    <h1>Australia</h1>
                    <div className="p">
                        <p>36 Swanston Street</p>
                        <p>Kewell</p>
                        <p>Victoria</p>
                        <p>+61 4 9928 3629</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutElement3;