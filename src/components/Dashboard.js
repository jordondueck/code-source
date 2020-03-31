import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Dashboard = () => {
  const projects = [
    {
      id: "001",
      title: "Code Source",
      commit: "03-11-20"
    },
    {
      id: "002",
      title: "Detekt",
      commit: "02-07-20"
    },
    {
      id: "003",
      title: "Studio Ghibli Search",
      commit: "12-23-19"
    },
    {
      id: "004",
      title: "RoboFriends",
      commit: "12-12-19"
    }
  ];

  return (
    <section className="container">
      {/* <h2>Dashboard</h2> */}
      <section className="dashboard__content">
        <h3>Your Projects</h3>
        <section className="dashboard__card-list">
          <Card projects={projects} />
        </section>
        <section className="dashboard__bottom">
          <Link className="link" to="/projects/">
            View All
          </Link>
        </section>
      </section>
      <section className="dashboard__content">
        <h3>Recommended Projects</h3>
        <section className="dashboard__card-list">
          <div className="card">Sample Project</div>
          <div className="card">Sample Project</div>
          <div className="card">Sample Project</div>
          <div className="card">Sample Project</div>
        </section>
        <section className="dashboard__bottom">
          <Link className="link" to="/projects/recommended">
            View All
          </Link>
        </section>
      </section>
      {/* <section className="dashboard__content">
        <h3>Recent Projects</h3>
        <section className="dashboard__card-list">
          <div className="card">Sample Project</div>
          <div className="card">Sample Project</div>
          <div className="card">Sample Project</div>
        </section>
        <section className="dashboard__bottom">
          <Link className="link" to="/projects/recent">
            View All
          </Link>
        </section>
      </section> */}
    </section>
  );
};

export default Dashboard;
