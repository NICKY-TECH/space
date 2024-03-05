import "/src/styles/destination.css"
import { Outlet } from "react-router-dom";
import {OverLay} from "/src/index"




function Main (){
    return <div className="main-wrapper">
    <OverLay/>
<Outlet/>
    </div>
}

export default Main