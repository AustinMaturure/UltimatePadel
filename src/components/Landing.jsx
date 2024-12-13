import "../css/landing.css";
import landingImg from "../assets/landing-img.jpg";
import arrow from "../assets/arrow-down-circle-svgrepo-com.svg";

export default function Landing() {
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
            <h1>BOOK YOUR COURT NOW</h1>{" "}
            <p>
              @ THE ONLY PADEL COURT IN PIET RETIEF, The ONLY Padel Court in
              Piet Retief/Mkhondo. Come experience this Fun Family Sport & Fully
              Halaal Ultimate Cafe
            </p>{" "}
            <div className="learn-more">
              <button>LEARN MORE</button>
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
