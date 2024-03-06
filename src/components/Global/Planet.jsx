import "/src/styles/destination.css";
import { PageImage} from "/src/index";
import {motion} from "framer-motion";
import gsap from "gsap";


function Planet({src}) {
  return <section className="moon">
    <motion.img src={src} animate={{ rotate:360 }} transition={{ ease:"linear" , duration:3,repeat:Infinity }}/>
 
  </section>;
}

export default Planet;
