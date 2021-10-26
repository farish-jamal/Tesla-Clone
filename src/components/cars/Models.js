import React from 'react';
import Fade from 'react-reveal/Fade';
import Description from './Description';
import Inside from './Inside';
import './model.css'

function ModelX({backgroundImg, topSpeed, range,peakPower, title, color, desc, backdropImg, speed, range_p, peak, game, connected, audio}) {
    return (
        <>
        <div className="models" style={{background: `url(${backgroundImg}) no-repeat center / cover`}}>
            <div className="models__info">
                <Fade bottom>
                <div className="models__name">
                     <h1 style={{color: `${color}`}}>{title}</h1>
                     <p style={{color: `${color}`}}>{desc}</p>
                </div>
                </Fade>
                <Fade bottom>
                <div className="models__specs">
                    <div className="topSpeed">
                    <h2>{topSpeed}</h2>
                    <p>{speed}</p>
                    </div>
                    <div className="topSpeed">
                    <h2>{range}</h2>
                    <p>{range_p}</p>
                    </div>
                     <div className="topSpeed">
                     <h2>{peakPower}</h2>
                     <p>{peak}</p>
                     </div>
                     
                      <div className="btn">Order Now</div>
                </div>
                </Fade>
            </div>
        </div>
            <Inside backdropImg={backdropImg}/>
            <Description game={game}
              connected={connected}
              audio={audio}
              backdropImg={backdropImg}
            />
        </>
    )
}

export default ModelX
