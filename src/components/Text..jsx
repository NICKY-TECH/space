import "/src/styles/destination.css";

function Text ({text,style}){
    return<div className={style}>
         <p>
            {text}
         </p>
    </div>
}


export default Text