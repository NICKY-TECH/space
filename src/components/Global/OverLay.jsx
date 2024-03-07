import "/src/styles/destination.css";
import { Navigation } from "/src/index";
import { mainNav } from "/src/resources/data/data.js";
import close from "/src/resources/images/shared/icon-close.svg";
import { useDispatch, useSelector } from "react-redux";
import { overLayState } from "../../feature/overLay";

function OverLay() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.overLay.value);
  function changeState(){
    dispatch(overLayState())

  }
 return  <>
  {
   menu? <aside>
  <div className="close">
    <img src={close} onClick={changeState}/>
  </div>
    <Navigation list={mainNav} isSub="true"/>
  </aside>:""
  }
 </>
}

export default OverLay;
