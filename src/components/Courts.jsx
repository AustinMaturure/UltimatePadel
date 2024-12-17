import "../css/courts.css";
import courtsIMg from "../assets/courts.jpg";
import { useEffect, useState } from "react";
import useElementInView from "../utils/ElementInView";

export default function Courts() {
  const [scale, setScale] = useState(0.4);
  const courtRef = useElementInView(".courts-cnt");

  useEffect(() => {
    if (courtRef.inView) {
      console.log(courtRef.inView);

      const handleScroll = () => {
        const scrollY = window.scrollY;
        let scaleValue = 0.4 + scrollY / 10000;

        if (scrollY >= 2900) {
          scaleValue = 1;
        }

        setScale(scaleValue);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [courtRef.inView]);
  return (
    <>
      <section
        className="courts-cnt"
        style={{
          backgroundImage: `url(${courtsIMg})`,
          transform: `scale(${scale})`,
        }}
        ref={courtRef.ref}
      >
        <div className="courts-text">
          <h1>Courts</h1>
          <p>Two outdoor, crystal double courts</p>
        </div>
      </section>
    </>
  );
}
