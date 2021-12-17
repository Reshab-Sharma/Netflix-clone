import React from 'react'
import "./list.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Listitem from "../listitem/Listitem"
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


function List() {
    const [isMoved, setIsMoved] = useState(false);
    const [sliderNumber, setSliderNumber] = useState(0);
    const listref = useRef();
    console.log(sliderNumber);
  
    const handleclick = (direction) => {
        setIsMoved(true);
        let distance = listref.current.getBoundingClientRect().x - 50;
        
        if (direction === "left" && sliderNumber > 0) {
            setSliderNumber(sliderNumber - 1);
            listref.current.style.transform = `translateX(${230 + distance}px)`
        }  else if (direction === "right" && sliderNumber < 5) {
            setSliderNumber(sliderNumber + 1);
            listref.current.style.transform = `translateX(${-230 + distance}px)`
        }

    };
    return (
        <div className="lists">
            <span className="listtitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosIcon className="sliderArrow left" onClick={() => handleclick("left")} style={{display: !isMoved && "none"}} />
                <div className="listitems" ref={listref} >
                   <Link to={'/watch'} className="link"> <Listitem index={0}/></Link> 
                   <Link to={'/watch'} className="link"> <Listitem index={1}/></Link>
                   <Link to={'/watch'} className="link"> <Listitem index={2}/></Link>
                   <Link to={'/watch'} className="link"> <Listitem index={3}/></Link>
                   <Link to={'/watch'} className="link"> <Listitem index={4} /></Link>
                   <Link to={'/watch'} className="link">  <Listitem index={5}/></Link>
                   <Link to={'/watch'} className="link"> <Listitem index={6}/></Link>
                   <Link to={'/watch'} className="link"> <Listitem index={7}/></Link>
                   <Link to={'/watch'} className="link"> <Listitem index={8}/></Link>
                   <Link to={'/watch'} className="link"> <Listitem index={9}/></Link>
                   <Link to={'/watch'} className="link"> <Listitem index={10}/></Link>
                   <Link to={'/watch'} className="link"> <Listitem index={11} /></Link>





                </div>
                < ArrowForwardIosIcon className="sliderArrow right " onClick={() => handleclick("right")} />
            </div>

        </div>
    )
}

export default List
