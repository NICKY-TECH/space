import "/src/styles/destination.css";
import { PageImage} from "/src/index";
import {motion} from "framer-motion";
import gsap from "gsap";


function Planet({src}) {
  return <section className="moon relative">
    <motion.img src={src} animate={{ rotate:360 }} transition={{ ease:"linear" , duration:3,repeat:Infinity }} className="absoluete top-0"/>
 
  </section>;
}

export default Planet;
