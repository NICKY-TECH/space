import "/src/styles/destination.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavItem({ item,number,link,isSub }) {
  const [active,setActive] = useState("HOME")
  const [subLink,setSubLink] =useState("MOON")
function makeActive (){
if(isSub =="true"){
  setSubLink(item)
}else if(isSub=="false"){
  setActive(item)
}
}

  return <li onClick={makeActive}>
 <Link to={`${link}`} className={isSub==="true" && subLink ===item?"active":isSub==="false" && active === item?"active":""}>
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
