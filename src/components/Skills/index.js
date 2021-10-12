import React from "react";
import "./style.scss";
import Cardlist from '../../AssetsComponents/Card/CardList';
import data from '../../config/config.json'

class Skills extends React.Component {
  state = {
    lang: []
  }


  render() {
    //this.Execute();
    return (

      <div className="skills">

        <h1>Skills</h1>
        <div className="content">
          <div>
            <strong>Languages:</strong>
            <Cardlist props={data.skills.Languages} /> 
          </div>
          <div>
            <strong>Libraries:</strong>
            <Cardlist props={data.skills.Libraries} />
          </div>
          <div>
            <strong>Tools:</strong>
            <Cardlist props={data.skills.Tools} />
          </div>
        </div>
      </div>
    );
  }

}



export default Skills;