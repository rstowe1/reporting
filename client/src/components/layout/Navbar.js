import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import StatusContext from "../../context/status/statusContext";

const Navbar = () => {
  const statusContext = useContext(StatusContext);

  return (
    <div className="navbar bg-primary">
      <Fragment>
        <ul>
          <li>
            <Link to="/status">Status</Link>
          </li>
          <li>
            <Link to="/approvals">Approvals</Link>
          </li>
        </ul>
      </Fragment>
    </div>
  );
};

export default Navbar;
