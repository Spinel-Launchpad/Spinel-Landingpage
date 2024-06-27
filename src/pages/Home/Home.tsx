import Banner from "./Component/Banner";
import Ecosystem from "./Component/Ecosystem";
import SpinelUniverse from "./Component/SpinelUniverse";
import Question from "./Component/Question";
import OurTeam from "./Component/OurTeam";
import Partners from "./Component/Partners";
import Feature from "./Component/Feature";

const Home = () => {

  return (
    <div>
     <Banner />
     <Feature />
     <SpinelUniverse />
     <Ecosystem />
     <Partners />
     <OurTeam />
     <Question />
    </div>
  );
};

export default Home;