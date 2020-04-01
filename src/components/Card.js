import React, { Fragment } from "react";

const Card = ({ projects }) => {
  return (
    <Fragment>
      {projects.map((project, i) => {
        return (
          <ul className="card">
            <li>{project.title}</li>
            <li>Last Commit: {project.commit}</li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href={project.url}>View Source <i class="fa fa-github"></i></a>
              {/* <a href="https://github.com/jordondueck" target="_blank">
            <i class="fa fa-github"></i>
          </a> */}

            </li>
          </ul>
        );
      })}
    </Fragment>
  );
};

export default Card;
