import Header from "../Component/TempHeader";
import Intro from "../Component/Intro";
import Project from "../Component/Project";
import Skills from "../Component/Skills";
import Experience from "./Experience";
const Home=()=>{
    return (
        <div >
          <Header/>
          <Intro/>
          <Skills/>
          <Project/>
        </div>
      );
    };
    export default Home;
