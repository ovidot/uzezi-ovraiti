import "font-awesome/css/font-awesome.min.css";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillItems = (props) => {
  const skills = props.skills;

  console.log(props, skills);

  return (
    <>
      {skills.map((skill) => (
        <div className="col-md-3" id="tooling" key={skill.key}>
          <i className="pt-4 myicon">
            <FontAwesomeIcon icon={skill.icon} />
            <span id="ticon">{skill.name}</span>
          </i>
        </div>
      ))}
    </>
  );
};

export default SkillItems;
