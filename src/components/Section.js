import React from 'react'
import './Section.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Section = ({backgroundImg, title, desc, leftBtn, rightBtn}) => {
    return (
        <div className="section" style={{background: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="section__info">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className="section__links">
                <div className="section__btn">
                    <div className="leftBtn">{leftBtn}</div>
                    <div className="rightBtn">{rightBtn}</div>
                </div>
                <KeyboardArrowDownIcon className="drop_arrow" style={{fontSize: '40px'}}/>
            </div>
        </div>
    )
}

export default Section
