import "/src/styles/destination.css";
import icon from "/src/resources/images/shared/logo.svg";
import { Navigation } from "/src/index";
import ham from "/src/resources/images/shared/icon-hamburger.svg";
import { mainNav } from "../../resources/data/data";
import { useDispatch } from "react-redux";
import { overLayState } from "../../feature/overLay";

function Header({ items }) {
  const dispatch = useDispatch();
  function changeState(){
    dispatch(overLayState())

  }
  return (
    <header>
      <div className="logo">
        <img src={icon} />
      </div>
      <div className="main-nav-container">
        <hr />
        <div className="ham-menu">
          <img src={ham} onClick={changeState}/>
        </div>
        <Navigation list={mainNav} isSub="false" style="main-nav"/>
      </div>
    </header>
  );
}

export default Header;
