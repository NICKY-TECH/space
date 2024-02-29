import "/src/styles/destination.css";
import icon from "/src/resources/images/shared/logo.svg"
import {Navigation} from "/src/index"

function Header ({items}){
    return  <header>
    <div className="logo">
    <img src={icon}/>
    </div>
     <div className="main-nav-container">
     <hr/>
     <Navigation list={items}/>
     </div>
      </header>
}

export default Header
