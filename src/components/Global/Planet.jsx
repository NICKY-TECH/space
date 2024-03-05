import "/src/styles/destination.css";
import { PageImage} from "/src/index";


function Planet({src}) {
  return <section className="moon">
    <PageImage link={src}/>
 
  </section>;
}

export default Planet;
