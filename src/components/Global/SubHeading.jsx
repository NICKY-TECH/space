import "/src/styles/destination.css";
import {motion,AnimatePresence} from "framer-motion";
import  { useEffect, useState } from "react";

function SubHeading({ heading,style }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [heading]);
  return  <AnimatePresence initial={false}>
    <motion.h2   key={key} className={style} animate={{ opacity:1 }} initial={{ opacity:0 }} transition={{ duration:4, }}>{heading}</motion.h2>
  </AnimatePresence>
  
}

export default SubHeading;
