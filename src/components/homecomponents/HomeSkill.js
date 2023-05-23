import React from "react";
import "../../index.css";
import {
  faPython,
  faJs,
  faNodeJs,
  faReact,
  faHtml5,
  faCss3,
  faGit,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import SkillItems from "./SkillItems";

const HomeSkill = () => {
  const skills = [
    { name: "Python", key: 2, icon: faPython },
    { name: "Javascript", key: 3, icon: faJs },
    { name: "NodeJs", key: 4, icon: faNodeJs },
    { name: "ReactJs", key: 5, icon: faReact },
    { name: "HTML", key: 6, icon: faHtml5 },
    { name: "CSS", key: 7, icon: faCss3 },
    { name: "GIT", key: 8, icon: faGit },
    { name: "Bootstrap", key: 9, icon: faBootstrap },
  ];

  return (
    <div className="container" align="center">
      {" "}
      {/*TOOLING CONTAINER*/}
      <div className="row" id="toolinggb">
        <SkillItems skills={skills} />
      </div>
    </div>
  );
};

export default HomeSkill;
