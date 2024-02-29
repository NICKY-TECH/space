import "/src/styles/destination.css";
import {NavItem} from "/src/index";

function Navigation({ list }) {
  return (
     <nav>
      <ul>
        {
          list.map((item,index) => {
          return <NavItem item={item.text} number={item.number} key={index}/>
          
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
