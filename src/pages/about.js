import React from "react";

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <p>
          This website was created as part of a student project for the
          university course "Discipline and Punish? BDSM, Power and Society" at
          the Paris Lodron University of Salzburg.
        </p>
        <p>This site was created using the React framework.</p>
        <p>
          You can contact me here:{" "}
          <a href="mailto:grybl.business@gmail.com">grybl.business@gmail.com</a>
        </p>
      </div>
    );
  }
}
