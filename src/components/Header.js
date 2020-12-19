import { Link, withRouter} from "react-router-dom";
const React = require("react");

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Logo
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        dataToggle="collapse"
        dataTarget="#navbarNav"
        ariaControls="navbarNav"
        ariaExpanded="false"
        ariaLabel="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link class="nav-link" to="/compose">
              Compose
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Header);
