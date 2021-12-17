
import "./login.scss";
import { Link } from "react-router-dom";


export default function Login(){
    
    
    return(
        <div className="login">
            <div className="top">
                <div className="wrappers">
                <img className="logos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
              

                </div>
            </div>
            <div className="containers">
                <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="email"  />
                <input type="password" placeholder="password"  />
                <Link to={'/'} className="link"><button>sign In</button> </Link>
                <p>New to Netflix? <b>Sign up now</b></p>
                <small>
                    This page is protected by Google recaptha to ensure you're not a bot. <b>Learnmore</b>
                </small>
                </form>

        </div>
        </div>
        )}
    
