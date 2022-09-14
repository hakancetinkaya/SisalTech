import logo from "../img/logo.png";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ background: "white" }}
      >
        <div className="container-fluid">
          <img src={logo} alt="" width="90" height="50" />
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ background: "green" }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ marginLeft: "8%" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#!"
                  style={{ color: "white" }}
                >
                  Sisal &gt; Sisal Test
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
