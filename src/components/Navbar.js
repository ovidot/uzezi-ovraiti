/* eslint-disable jsx-a11y/anchor-is-valid */
import "../index.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 " style={{}}>
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "skyblue", borderRadius: 20 }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img
                  src="images/1.png"
                  alt="logoimage"
                  height="auto"
                  width={80}
                />
              </a>
              <button
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="row">
                <div className="col">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item ">
                        <a
                          className="nav-link active navhm"
                          aria-current="page"
                          href="index.html"
                        >
                          <i
                            className="fa fa-home"
                            style={{ color: "rgb(#fff)" }}
                          />
                          <span className=""> </span>
                          <Link to="/">Home</Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">
                          <span className="navnum">02</span>
                          <Link to="/about" style={{ textDecoration: "none" }}>
                            About
                          </Link>
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="navnum">03</span> Skills
                        </a>
                        <ul
                          className="dropdown-menu"
                          style={{ backgroundColor: "skyblue" }}
                        >
                          <li>
                            <Link to="/skills">
                              <a className="dropdown-item " href="Skills.html">
                                Skills
                              </a>
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="projects.html">
                              Projects
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="reviews.html">
                              Blog
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a
                              className="dropdown-item btn btn-primary"
                              data-bs-toggle="offcanvas"
                              href="#offcanvasExample"
                              role="button"
                              aria-controls="offcanvasExample"
                            >
                              {" "}
                              My Statistic
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link">
                          <span className="navnum">04</span>
                          <Link to="/contact"> Contact</Link>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          href="pform.html"
                          style={{ color: "gray !important" }}
                        >
                          {" "}
                          Start a project
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
