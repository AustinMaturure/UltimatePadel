import "../css/footer.css";
import ball from "../assets/tennis-ball.svg";

export default function Footer() {
  return (
    <>
      {" "}
      <section className="footer-cnt" id="footer">
        <footer>
          <div className="footer-content">
            <div className="quick-links">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="quick-links">
              <ul>
                <li>Tel: 068 000 0333</li>
                <li>Location: 22 von Brandis Street Piet Retief, Mkhondo</li>
                <li>Operating Hours: MON - SUN 07:00 - 22:00</li>
                <li>
                  <a href="https://www.instagram.com/padel_ultimate/">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h1>
            ULTIMATE PADEL <img src={ball} alt="" />
          </h1>
          <p className="copy-right">
            &copy; {new Date().getFullYear()} Ultimate padel Piet Retief. All
            rights reserved. Designed and developed by{" "}
            <a
              className="austin-portfolio"
              href="https://austinmaturure.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⚡
            </a>
          </p>
        </footer>
      </section>
    </>
  );
}
