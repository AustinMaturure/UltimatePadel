import "../css/about.css";
import girlNEtImg from "../assets/pexels-julia-kuzenkov-442028-2996259.jpg";
import stamp from "../assets/sr.svg";

export default function About() {
  return (
    <>
      <section className="about-cnt" id="about">
        <div className="about-grid">
          <div className="grid-block grid-1">
            <h1>ABOUT US</h1>
            <p>
              Come over to enjoy our padel courts, family sized fun and grab a
              snacks with a variety of halaal food options available
            </p>
          </div>
          <div className="grid-block grid-2">
            {" "}
            <h2>PROFESSIONAL COACHING</h2>
            <p>
              Experienced instructors at the academy help refine technique and
              teach both basic and advanced skills.
            </p>
          </div>
          <div className="grid-block grid-3">
            <img src={girlNEtImg} alt="" />
            <img className="stamp-img" src={stamp} alt="" />
          </div>
          <div className="grid-block grid-4">
            {" "}
            <h2>COMPETITIONS AND TOURNAMENTS</h2>
            <p>
              Regular events help participants test their skills and improve
              their game.
            </p>
          </div>
          <div className="grid-block grid-5">
            <h2>GROUP AND INDIVIDUAL SESSIONS</h2>
            <p>
              Choosing the format allows for optimal workload distribution and
              faster results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
