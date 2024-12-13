import "../css/courts.css";
import courtsIMg from "../assets/courts.jpg";

export default function Courts() {
  return (
    <>
      <section
        className="courts-cnt"
        style={{ backgroundImage: `url(${courtsIMg})` }}
      >
        <div className="courts-text">
          <h1>Courts</h1>
          <p>Two outdoor, crystal double courts</p>
        </div>
      </section>
    </>
  );
}
