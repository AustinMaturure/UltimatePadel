import "../css/schedule.css";

export default function Schedule() {
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
      <section className="schedule-cnt">
        <div className="services-header">
          <h1>Schedule</h1>
          <p> Have a look at what time slots are available MON-FRI</p>
        </div>
        <div className="schedule">
          {days.map((day) => {
            const randomOpenSlots = getRandomOpenSlots(5, 16); // Randomly pick 5 open slots for each day
            return (
              <div className="day" key={day}>
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
      <section className="events-banner">
        <div className="wrapper">
          <div className="upcoming-event">
            <h2>Upcoming Event:</h2>
          </div>
          <div className="event-date">
            <h2>21 December 2024</h2>
          </div>
          <div className="event-price">
            <h2>Members: R10; Non Members:R20</h2>
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
    </>
  );
}
