import React from 'react'
import "./featured.scss";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/Info';
function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category"><span>{type ==="movies"? "Movies":"series"}</span>
                 <select name="genre" id="genre">
                     <option >genre</option>
                     <option value="Comedy">Comedy</option>
                     <option value="Action">Action</option>
                     
                     <option value="Adventure">Adventure</option>
                 </select>
                </div>
            )}
            <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/09/07/994983-antim-the-final-truth.jpg" alt="" />
            <div className="info">
            
             <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero. Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
             <div className="button">
                 <div className="play">
                < PlayArrowIcon/>
                <span>Play</span>
                 </div>
                 <div className="more">
                 <InfoIcon/>
                 <span> Info</span>
                 </div>
             </div>
            </div>
        </div>
    )
}

export default Featured
