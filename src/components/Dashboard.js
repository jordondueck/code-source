import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="container">
      <h2>Dashboard</h2>
      <section className="dashboard__content">
        <h3>Your Projects</h3>
        <section className="dashboard__card-list">
          <div className="card">Sample Project</div>
          <div className="card">Sample Project</div>
          <div className="card">Sample Project</div>
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
        </section>
        <section className="dashboard__bottom">
          <Link className="link" to="/projects/recommended">
            View All
          </Link>
        </section>
      </section>
      <section className="dashboard__content">
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
      </section>
    </section>
  );
};

export default Dashboard;
