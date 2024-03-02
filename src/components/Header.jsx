import "/src/styles/destination.css";
import icon from "/src/resources/images/shared/logo.svg"
import {Navigation} from "/src/index"
import ham from "/src/resources/images/shared/icon-hamburger.svg";
import { mainNav } from "../resources/data/data";

function Header ({items}){
    return  <header>
    <div className="logo">
    <img src={icon}/>
    </div>
     <div className="main-nav-container">
     <hr/>
     <div className="ham-menu">
   <img src={ham} />
   </div>
     <Navigation list={mainNav} style="main-nav"/>
     </div>
      </header>
}

export default Header
