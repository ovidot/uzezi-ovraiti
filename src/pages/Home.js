import Name from "../components/Name";
import HomeInfo from "../components/homecomponents/HomeInfo";
import Exp from "../components/homecomponents//Exp";
import HomeSkill from "../components/homecomponents//HomeSkill";
import "../index.css";
import Designer from "../components/homecomponents/Designer";
export const Home = () => {
  return (
    <>
      <Name />
      <div className="container">
        <div className="row">
          <Designer />
          <HomeInfo />
          <Exp />
        </div>
        <HomeSkill />
      </div>
    </>
  );
};
