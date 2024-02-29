import "/src/styles/destination.css";
import { PageImage} from "/src/index";
import mars from "/src/resources/images/destination/image-mars.png"

function Mars() {
  return <section className="moon">
    <PageImage link={mars}/>
 
  </section>;
}

export default Mars;
