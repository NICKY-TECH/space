import "/src/styles/destination.css";
import {motion} from "framer-motion"
import  { useEffect, useState } from "react";

function Text ({text,style}){
    const [key, setKey] = useState(0);

    useEffect(() => {
      setKey((prevKey) => prevKey + 1);
    }, [text]);
    return<div className={style}>
    {
        style=="text-container-planet"?<motion.p   key={key}  animate={{ x:0 }} initial={{x:-150 }} transition={{ duration:2, type:"spring" }}>
            {text}
         </motion.p>:  <p>
            {text}
         </p>
    }
       
    </div>
}


export default Text