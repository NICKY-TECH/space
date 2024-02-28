import "/src/styles/destination.css";

function NavItem({ item,number }) {
  return <li>
 {
  number? <span className="number-nav">
    {number}
    </span>:""
 }
   {item}
  </li>;
}

export default NavItem;
