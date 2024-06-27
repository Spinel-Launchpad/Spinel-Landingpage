import { useNavigate } from "react-router-dom";
import Banner from "./Componnet/Banner";
import Ecosystem from "./Componnet/Ecosystem";
import SpinelUniverse from "./Componnet/SpinelUniverse";
import Question from "./Componnet/Question";
import OurTeam from "./Componnet/OurTeam";
import Partners from "./Componnet/Partners";
import Feature from "./Componnet/Feature";
// import { Button } from "@headlessui/react";

const Home = () => {
  const navigate = useNavigate();

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