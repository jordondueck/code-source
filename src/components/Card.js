import React, { Fragment } from "react";

const Card = ({ projects }) => {
  return (
    <Fragment>
      {projects.map((project, i) => {
        return (
          <ul className="card">
            {/* <li>{project.id}</li> */}
            <li>{project.title}</li>
            <li>Last Commit: {project.commit}</li>
          </ul>
        );
      })}
    </Fragment>
  );
};

export default Card;
