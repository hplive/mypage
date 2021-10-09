import React from "react";
import "./style.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>C#</li>
          <li>SQL</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>React.js</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Eslint</li>
          <li>Chrome Dev</li>
          <li>Git & Github</li>
          <li>VS Code</li>
          <li>VS Studio</li>
        </div>
        {/* <div>
          <strong>Tests:</strong>
          <li>Jest</li>
          <li>Enzyme</li>
          <li>React-test</li>
          <li>SupperTest</li>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;