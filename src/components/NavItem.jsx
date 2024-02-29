import "/src/styles/destination.css";

function NavItem({ item,number }) {
  return <li>
 <a>
 {
  number? <span className="number-nav">
    {number}
    </span>:""
 }
   {item}

 </a>
  </li>;
}

export default NavItem;
