import "../css/services.css";
import ball from "../assets/ball.jpg";
import kids from "../assets/kids.jpg";
import cafe from "../assets/cafe.png";
import pro from "../assets/pro.jpg";
import useElementInView from "../utils/ElementInView";
export default function Services() {
  const serviceHeadRef = useElementInView(".service-h1");
  const serviceSubRef = useElementInView(".service-sub");

  return (
    <>
      <section className="services-cnt " id="services">
        {" "}
        <div className="services-header">
          <h1 className="service-h1 sl" ref={serviceHeadRef.ref}>
            SERVICES
          </h1>
          <p ref={serviceSubRef.ref} className="service-sub sr">
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
                We offer a dedicated kids' area packed with engaging activities
                to keep your little ones entertained. With the support of our
                friendly and attentive staff, children can enjoy a fantastic
                time both on the padel courts and in the kids' zone, ensuring a
                fun-filled experience for all!
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
                Discover everything you need to elevate your padel game at our
                Pro Shop! From premium paddles and balls to essential gear and
                accessories, we’ve got you covered. Our selection includes
                high-quality paddles, shoes, socks, and other must-have items to
                enhance your performance and style on the court.
              </p>
            </div>
            <div className="service-img">
              <img src={pro} alt="" srcset="" />
            </div>
          </div>
          <div className="service">
            <div className="service-text">
              <h1>EVENTS</h1>
              <p>
                We regularly host family-friendly events that bring everyone
                together! From exciting padel tournaments to lively fun runs,
                there’s always something to look forward to for all ages.
              </p>
            </div>
            <div className="service-img"></div>
          </div>
        </div>
      </section>
    </>
  );
}
