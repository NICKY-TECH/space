import "/src/styles/destination.css";
import {NavItem} from "/src/index";

function Navigation({ list,style,isSub }) {
  return (
     <nav className={style?style:""}>
      <ul>
        {
          list.map((item,index) => {
          return <NavItem item={item.text} number={item.number} isSub={isSub}  key={index} link={item.link}/>
          
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
