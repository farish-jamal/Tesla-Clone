import React from 'react'
import './Section.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fade from 'react-reveal/Fade';

const Section = ({backgroundImg, title, desc, leftBtn, rightBtn}) => {
    return (
        <div className="section" style={{background: `url(${backgroundImg}) no-repeat center / cover`}}>
            <div className="section__info">
            <Fade bottom>
                <h1>{title}</h1>
            </Fade>
            <Fade clear>
                <p>{desc}</p>
            </Fade>
            </div>
            <div className="section__links">
                <div className="section__btn">
                <Fade bottom>
                    <div className="leftBtn">{leftBtn}</div>
                </Fade>
                    <Fade bottom>
                        {rightBtn &&
                    <div className="rightBtn">{rightBtn}</div>
                   }
                    </Fade>
                </div>
                <Fade bottom>
                <KeyboardArrowDownIcon className="drop_arrow" style={{fontSize: '40px'}}/>
                </Fade>
            </div>
        </div>
    )
}

export default Section
