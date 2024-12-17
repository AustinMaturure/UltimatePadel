import "../css/landing.css";
import landingImg from "../assets/landing-img.jpg";
import arrow from "../assets/arrow-down-circle-svgrepo-com.svg";
import useElementInView from "../utils/ElementInView";
export default function Landing() {
  const headRef = useElementInView(".landing-text-header");
  const landSubRef = useElementInView(".landing-text p");
  const landButtonSub = useElementInView(".learn-more");
  return (
    <>
      <section
        className="landing-cnt"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${landingImg})`,
        }}
      >
        <div className="landing">
          <div className="landing-text">
            <h1 className="landing-text-header sl" ref={headRef.ref}>
              BOOK YOUR COURT NOW
            </h1>{" "}
            <p className="sl-d" ref={landSubRef.ref}>
              @ The ONLY Padel court in Piet Retief/Mkhondo! Experience this
              exciting family-friendly sport and enjoy delicious, fully Halaal
              meals at our Ultimate Café. Join us for fun and unforgettable
              moments!
            </p>{" "}
            <div className="learn-more" ref={landButtonSub.ref}>
              <button>LEARN MORE</button>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
