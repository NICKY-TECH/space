import "/src/styles/destination.css";
import {SubHeading,MainHeading,Text,Header} from "/src/index"
import { mainNav } from "../resources/data/data";


function Home() {
 return  <section className="home">
<Header items={mainNav}/>
<section className="section-two">
<article className="home-section-one">
   <div className="inner-container-home-section-two">
   <SubHeading heading="
  SO, YOU WANT TO TRAVEL"/>
  <MainHeading heading="SPACE"/>
  <Text text="Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!"/>
   </div>
    </article>
    <article className="home-section-two">
<div className="explore-bg">
  <div className="explore">
  EXPLORE

  </div>
</div>

    </article>
</section>
  </section>;
}

export default Home;
