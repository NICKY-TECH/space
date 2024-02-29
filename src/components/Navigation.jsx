import "/src/styles/destination.css";
import {NavItem} from "/src/index";

function Navigation({ list,style }) {
  return (
     <nav className={style}>
      <ul>
        {
          list.map((item,index) => {
          return <NavItem item={item.text} number={item.number} key={index} link={item.link}/>
          
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
