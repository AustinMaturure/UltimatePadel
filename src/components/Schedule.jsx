import "../css/schedule.css";
import useElementInView from "../utils/ElementInView";

export default function Schedule() {
  const DaysRef = useElementInView(".day").ref;
  const getRandomOpenSlots = (count, totalSlots) => {
    const indices = new Set();
    while (indices.size < count) {
      indices.add(Math.floor(Math.random() * totalSlots));
    }
    return indices;
  };
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <section className="events-banner" id="schedule">
        <div className="wrapper">
          <div className="upcoming-event">
            <h2>Upcoming Event:</h2>
          </div>
          <div className="event-date">
            <h2>21 December 2024</h2>
          </div>
          <div className="event-price">
            <h2>Members: R10</h2>
          </div>
          <div className="event-type">
            <h2>Start & Finish @ Court</h2>
          </div>
          <div className="event-time">
            <h2>Entry: 17:00. Start: 17:30</h2>
          </div>
          <div className="event-description">
            <h2>Fun Run</h2>
          </div>
        </div>
      </section>
      <section className="schedule-cnt">
        <div className="services-header">
          <h1>Schedule</h1>
          <p> Have a look at what time slots are available MON-SAT</p>
        </div>
        <div className="dots-explanation">
          <div className="dots-container">
            <div className="dot "></div>
            <div className="text">
              <p> - Open Slots</p>
            </div>
          </div>
          <div className="dots-container">
            <div className="dot dot-green"></div>
            <div className="text">
              <p> - Closed Slots</p>
            </div>
          </div>
        </div>
        <div className="schedule">
          {days.map((day, index) => {
            const randomOpenSlots = getRandomOpenSlots(5, 16);
            return (
              <div
                className={`day day-${index} su`}
                key={day}
                ref={DaysRef}
                style={{ animationDelay: `${0 + index / 10}s` }}
              >
                <div className="day-name">
                  <h2>{day}</h2>
                </div>
                <div className="time-slots">
                  {Array.from({ length: 16 }, (_, i) => (
                    <div
                      className={`time ${randomOpenSlots.has(i) ? "open" : ""}`}
                      key={i}
                    >
                      {`${String(7 + i).padStart(2, "0")}:00`}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
