import "../css/navbar.css";

export default function Navbar() {
  return (
    <>
      <header className="navbar-header">
        <nav className="navbar">
          <div className="navbar-logo">
            <a href="/">
              <h1> ULTIMATE PADEL PIET RETIEF</h1>
            </a>
            <p>@ Family & Fun</p>
          </div>
          <div className="nav-items">
            <ul className="nav-menu">
              <li>
                <a href="#schedule">Schedule</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>

            <div className="navbar-cta">
              <a href="#call" className="btn btn-call">
                068 000 0333
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
