    import React from 'react';
import '../element3/element3.css'

export const Element3 = () => {
  return (
    <div className='element3-container'>
        <div className="element3-mini-container">
            <div className='title'>
                <h4>How it works</h4>
            </div>
            <div className='line'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='step-cards'>
                <div>
                    <h1>01</h1>
                    <h3>Pick your coffee</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi vel ipsum aliquid sit, accusamus veritatis provident exp?</p>
                </div>
                <div>
                    <h1>02</h1>
                    <h3>Choose the frequency</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum vitae hic ullam necessitatibus aliquam quia eligendi incidunt a</p>
                </div>
                <div>
                    <h1>03</h1>
                    <h3>Reseive and anjoy!</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, inventore sed odit facilis dolorem molestiae at d</p>
                </div>
            </div>
            <div className='button'>
                <button>Create your plan</button>
            </div>
        </div>
    </div>
  )
}

export default Element3;