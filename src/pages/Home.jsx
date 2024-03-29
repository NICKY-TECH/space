import "/src/styles/destination.css";
import { SubHeading, MainHeading, Text, Header } from "/src/index";
import { useState } from "react";

function Home() {
  const [hover, setHove] = useState(false);
  return (
    <section className="home">
      <Header />
      <section className="section-two">
        <article className="home-section-one">
          <div className="inner-container-home-section-two">
            <SubHeading
              heading="
  SO, YOU WANT TO TRAVEL"
              style="home-sub-title"
            />
            <MainHeading heading="SPACE" style="home-main-title" />
            <Text
              text="Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!"
              style="text-container"
            />
          </div>
        </article>
        <article className="home-section-two">
          <div className={hover ? "explore-bg bg-stone-50/30" : "explore-bg"}>
            <div
              className="explore"
              onMouseEnter={() => setHove(true)}
              onMouseLeave={() => setHove(false)}
            >
              EXPLORE
            </div>
          </div>
        </article>
      </section>
    </section>
  );
}

export default Home;
