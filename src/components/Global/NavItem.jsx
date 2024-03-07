import "/src/styles/destination.css";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { mainNavState } from "../../feature/mainNavActive";
import { subNavState } from "../../feature/subNav";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


function NavItem({ item,number,link,isSub }) {
  const location = useLocation();
  function activateLink(){
    if(location.pathname==="/destination"){
      localStorage.setItem("sub","MOON") 
     localStorage.setItem("main","DESTINATION")
    }
     location.pathname === "/destination/mars"?  localStorage.setItem("sub","MARS"):location.pathname ==="/destination/europa"?  localStorage.setItem("sub","EUROPA"):location.pathname === "/destination/titan"?  localStorage.setItem("main","TITAN"):location.pathname ==="/home"||location.pathname==="/"? localStorage.setItem("main","HOME"):location.pathname ==="/crew"? localStorage.setItem("main","CREW"):location.pathname ==="/technology"? localStorage.setItem("main","TECHNOLOGY"):""
  }
  useEffect(()=>{
    activateLink()
       },[])
 
   useEffect(()=>{
activateLink()
   },[location.pathname])
  const dispatch = useDispatch();
  const mainLink= useSelector((state) => state.mainNavActive.value);
  const subLink= useSelector((state) => state.subNav.value);
function makemainLink (){
if(isSub =="true"){
  localStorage.setItem("sub",`${item}`)
  dispatch(subNavState(item))
}else if(isSub=="false"){
  localStorage.setItem("main",`${item}`)
  dispatch(mainNavState(item))
}
}

  return <li onClick={makemainLink}>
 <Link to={`${link}`} className={isSub==="true" && subLink ===item?"active":isSub==="false" && mainLink === item?"active":""}>
 {
  number? <span className="number-nav">
    {number}
    </span>:""
 }
   {item}

 </Link>
  </li>;
}

export default NavItem;
