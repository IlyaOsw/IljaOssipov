import ".././Skills.scss";
import htmlIcon from "./Icons/html.svg";
import cssIcon from "./Icons/css.svg";
import sassIcon from "./Icons/sass.svg";
import jsIcon from "./Icons/js.svg";
import tsIcon from "./Icons/ts.svg";
import reactIcon from "./Icons/react.svg";
import gitIcon from "./Icons/git.svg";
import bootstrapIcon from "./Icons/bootstrap.svg";
import reduxIcon from "./Icons/redux.svg";

const SkillIcons = () => {
  const skillIcons = [
    { id: 1, img: htmlIcon, label: "Html" },
    { id: 2, img: cssIcon, label: "Css" },
    { id: 3, img: sassIcon, label: "Sass" },
    { id: 4, img: bootstrapIcon, label: "Bootstrap" },
    { id: 5, img: jsIcon, label: "Javascript" },
    { id: 6, img: tsIcon, label: "Typescript" },
    { id: 7, img: reactIcon, label: "React" },
    { id: 8, img: reduxIcon, label: "Redux" },
    { id: 9, img: gitIcon, label: "Git" },
  ];
  const getSkillIcons = () =>
    skillIcons.map((icon) => (
      <img
        src={icon.img}
        alt={`${icon.label} icon`}
        className="animation_item"
        key={icon.id}
      />
    ));
  return <div className="skills-icons">{getSkillIcons()}</div>;
};

export default SkillIcons;
