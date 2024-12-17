import cafe from "../assets/ultimate-cafe.jpg";
import logo from "../assets/cafe-logo.png";
import "../css/cafe.css";
import useElementInView from "../utils/ElementInView";

export default function Cafe() {
  const imgRef = useElementInView(".cafe-img-cnt").ref;
  const menuRef = useElementInView(".cafe-menu").ref;
  return (
    <>
      <section className="cafe-cnt">
        <div className="cafe-info">
          <div className="cafe-left" ref={imgRef}>
            <div className="cafe-img-cnt sl">
              <img src={cafe} alt="" />
              <div className="cafe-name name-1">
                <h1>Ultimate Cafe</h1>
              </div>
              <div className="cafe-logo">
                <img src={logo} alt="" />
              </div>
              <div className="cafe-name">
                <h1>Ultimate Cafe</h1>
              </div>
            </div>
          </div>
          <div className="cafe-menu su" ref={menuRef}>
            {" "}
            <h1>Menu</h1>
            <div className="menu-items">
              <div className="day-item">
                <h2>MON</h2>
                <div className="item-desc">
                  <p>Crunchy Chicken Wrap</p>
                  <p>R 70</p>
                </div>
              </div>
              <div className="day-item">
                <h2>TUE</h2>
                <div className="item-desc">
                  <p>Chicken Tikka</p>
                  <p>R 100</p>
                </div>
              </div>
              <div className="day-item">
                <h2>WED</h2>
                <div className="item-desc">
                  <p>Zinger Burger</p>
                  <p>R 120</p>
                </div>
              </div>

              <div className="day-item">
                <h2>THU</h2>
                <div className="item-desc">
                  <p>Chicken Manchurian</p>
                  <p>R 120</p>
                </div>
              </div>

              <div className="day-item">
                <h2>FRI</h2>
                <div className="item-desc">
                  <p>Chicken Akni</p>
                  <p>R 100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
