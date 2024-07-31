import React from 'react';
import '../aboutelement2/style.css';
import Bitmap from '../../../assets/images/Bitmap (1).jpg'

export const AboutElement2 = () => {
  return (
    <div className='about-element2-container'>
        <div className="mini-container">

            <div className="text-container">
                
                    <h2>Uncompromising quality</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facilis eligendi assumenda neque itaque quibusdam soluta deleniti ipsum corrupti nam molestiae debitis et quidem autem, totam deserunt eius quia necessitatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptates eveniet praesentium qui? Sequi id officiis ducimus repellat, error illo, reprehenderit mollitia exercitationem dolore vel cupiditate soluta impedit expedita recusandae!</p>
                
            </div>

            <div className="img">
                <img src={Bitmap} alt="" />
            </div>

        </div>
    </div>
  )
}

export default AboutElement2;