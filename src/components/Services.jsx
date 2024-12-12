import "../css/services.css";
import ball from "../assets/ball.jpg";
import kids from "../assets/kids.jpg";
import cafe from "../assets/cafe.png";
export default function Services() {
  return (
    <>
      <section className="services-cnt">
        {" "}
        <div className="services-header">
          <h1>SERVICES</h1>
          <p>
            {" "}
            Get a run down of many of things we have to offer. More to come!
          </p>
        </div>
        <div className="service-wheel">
          <div className="service">
            <div className="service-text">
              <h1>PADEL COURTS</h1>
              <p>
                We have four padel courts each court is a Panoramic championship
                type Padel Court with 12mm tempered glass and synthetic
                surfacing, along with 8 200W electric lights so nighttime
                playing is also available
              </p>
            </div>
            <div className="service-img">
              {" "}
              <img src={ball} alt="" srcset="" />
            </div>
          </div>
          <div className="service">
            <div className="service-text">
              <h1>ULTIMATE CAFE</h1>
              <p>
                at UTLTIMATE cafe, enjoy a menu of tasty halaal bites and
                refreshing beverages to enjoy before, during, or after your
                games. Our selection will be curated to keep you energized and
                ready for every volley. we also regularly have food stalls
                available.
              </p>
            </div>
            <div className="service-img">
              {" "}
              <img src={cafe} alt="" srcset="" />
            </div>
          </div>
          <div className="service">
            <div className="service-text">
              <h1>KIDS AREA</h1>
              <p>
                We have a designated kids area with activities to keep the kids
                entertained along with our friendly staff kids can have blast
                both playing padel and in the kids area
              </p>
            </div>
            <div className="service-img">
              {" "}
              <img src={kids} alt="" srcset="" />
            </div>
          </div>
          <div className="service">
            <div className="service-text">
              <h1>PRO SHOP</h1>
              <p>
                Find all your Padel needs at the PRO SHOP. from padels, balls
                and any gear you need to improve your padel experience. We
                stock: Padel brackets, balls, shoes & socks and other
                accessories{" "}
              </p>
            </div>
            <div className="service-img"></div>
          </div>
          <div className="service">
            <div className="service-text">
              <h1>EVENTS</h1>
              <p>
                We regularly host family friendly events, from padel tornuments
                to fun runs, theres always something to look forard to
              </p>
            </div>
            <div className="service-img"></div>
          </div>
        </div>
      </section>
    </>
  );
}
