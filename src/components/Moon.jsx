import "/src/styles/destination.css";
import { PageImage} from "/src/index";
import moon from "/src/resources/images/destination/image-mars.png"

function Moon() {
  return <section className="moon">
    <PageImage link={moon}/>
 
  </section>;
}

export default Moon;
