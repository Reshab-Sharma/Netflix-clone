import "./topbar.scss"
import ListIcon from '@material-ui/icons/List'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";
//import { useState } from "react";

function Topbar() {
    
    console.log(window.pageYOffset);
    //window.onscroll=()=>{
       // isSetscroll(window.pageYOffset===0? false:true );
      //  return()=>(window.onscroll=null);
   // };
    return (
        


        <div className="container">
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" className="imglogo" />
            </div>
            <div className="nav">
                <div className="menulist">

               <ul className="ullist">
                   <Link to={`/`} className="link"><li>Home</li></Link>
                  <Link to={`/movies`} className="link"> <li>Movies</li></Link>
                  <Link to={`/series`} className="link"><li>series</li></Link>
                  
                   <li>Most Popular</li>
                   <li>My List</li>
               </ul>

                </div>
            </div>
            <div className="icons">
                <div className="iconList">

                <div className="list">
               <ListIcon/>
                </div>
                <div className="notification">
               <NotificationsActiveIcon/>
                </div>
                <div className="profile">
                <AccountCircleIcon />
                <div className="options">

                <span>settings</span>
                <Link to={"/login"} className="link"><span>Logout</span></Link>
                </div>
                </div>
                </div>
            </div>
        </div>

        
    )
}

export default Topbar
