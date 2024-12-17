import "../css/about.css";
import girlNEtImg from "../assets/pexels-julia-kuzenkov-442028-2996259.jpg";
import stamp from "../assets/sr.svg";
import useElementInView from "../utils/ElementInView";

export default function About() {
  const AboutHeadRef = useElementInView(".about-header");
  const AboutSubRef = useElementInView(".about-sub");
  const stampImgRef = useElementInView(".stamp-img");
  const stampCntRef = useElementInView(".stamp-img-cnt");

  return (
    <>
      <section className="about-cnt" id="about">
        <div className="about-grid">
          <div className="grid-block grid-1">
            <h1 className="about-header sl" ref={AboutHeadRef.ref}>
              ABOUT US
            </h1>
            <p className="about-sub sl-d" ref={AboutSubRef.ref}>
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
            <img
              className="stamp-img-cnt sr"
              ref={stampCntRef.ref}
              src={girlNEtImg}
              alt=""
            />
            <img
              className="stamp-img op"
              src={stamp}
              ref={stampImgRef.ref}
              alt=""
            />
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
