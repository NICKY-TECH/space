import "/src/styles/destination.css";
import { Navigation } from "/src/index";
import { mainNav } from "/src/resources/data/data.js";
import close from "/src/resources/images/shared/icon-close.svg"

function OverLay() {
 return  <aside>
  <div className="close">
    <img src={close}/>
  </div>
    <Navigation list={mainNav}/>
  </aside>;
}

export default OverLay;
