import React from 'react';
import Fade from 'react-reveal/Fade';
import './model.css'

function ModelX({backgroundImg, topSpeed, range,peakPower, title}) {
    return (
        <div className="models" style={{background: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="models__info">
                <Fade bottom>
                <div className="models__name">
                     <h1 style={{color: '#000'}}>{title}</h1>
                </div>
                </Fade>
                <Fade bottom>
                <div className="models__specs">
                    <div className="topSpeed">
                    <h2>{topSpeed}</h2>
                    <p>Top Speed</p>
                    </div>
                    <div className="topSpeed">
                    <h2>{range}</h2>
                    <p>Range (est.)</p>
                    </div>
                     <div className="topSpeed">
                     <h2>{peakPower}</h2>
                     <p>Peak Power</p>
                     </div>
                     
                      <div className="btn">Order Now</div>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default ModelX
