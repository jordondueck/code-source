import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
// `;

// const List = styled.ul`
//   display: flex;
//   list-style: none;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   padding: 0.5rem;
// `;

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="list">
        <li className="list-item">
          <Link className="navbar__link" to="/">Code Source</Link>
        </li>
      </ul>
      <ul className="list">
        <li className="list-item">
          <Link className="navbar__link" to="/">Home</Link>
        </li>
        <li className="list-item">
          <Link className="navbar__link" to="/about">About</Link>
        </li>
        <li className="list-item">
          <Link className="navbar__link" to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
