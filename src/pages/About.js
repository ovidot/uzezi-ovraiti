import Name from "../components/Name";
import StartAProject from "../components/StartAProject";
import Bio from "../components/aboutcomponents/Bio";
import Quote from "../components/aboutcomponents/Quote";

export const About = () => {
  return (
    <>
      <Name />
      <div className="container">
        <div className="row">
          <Quote />
          <Bio />
          <br></br>
          <StartAProject />
        </div>
      </div>
    </>
  );
};
