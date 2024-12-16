import "../css/pricing.css";
import arrow from "../assets/arrow-down-circle-svgrepo-com.svg";
export default function Pricing() {
  return (
    <>
      <section className="pricing-cnt" id="pricing">
        <div className="pricing">
          <div className="services-header pricing-header">
            <h1>PRICING</h1>
            <p> Have a look at our pricing options for coaching & playing</p>
          </div>
          <div className="prices">
            <div className="price">
              <h1>Padel Match</h1>
              <p>1 of 2 Outdoor, Crystal and Double Courts</p>
              <hr />
              <h1> R 350</h1>
              <p>per hour</p>
              <div className="book-btn">
                <button>Book</button>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="price">
              <h1>Coaching </h1>
              <p>Professional coaching by coach Eddie</p>
              <hr />
              <h1>R 200</h1>
              <p>for 4 people</p>
              <div className="book-btn">
                <button>Book</button>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="price">
              <h1>Individual Coaching </h1>
              <p>Personal coaching by coach Eddie</p>
              <hr />
              <h1>R 500</h1>
              <p>for 5 lessons</p>
              <div className="book-btn">
                <button>Book</button>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="price">
              <h1>Personal Training </h1>
              <p>Female only personal training</p>
              <hr />
              <h1>Flexible</h1>
              <p>Call to find out your rate</p>
              <div className="book-btn">
                <button>Book</button>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
