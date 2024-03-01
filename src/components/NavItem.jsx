import "/src/styles/destination.css";
import { NavLink } from "react-router-dom";

function NavItem({ item,number,link }) {
  console.log(link)
  return <li>
 <NavLink to={`${link}`}>
 {
  number? <span className="number-nav">
    {number}
    </span>:""
 }
   {item}

 </NavLink>
  </li>;
}

export default NavItem;
