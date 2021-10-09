const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  minutes: document.querySelector('span[data-value="mins"]'),
  seconds: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const x = setInterval(() => {
      const dateNow = Date.now();
      const datesDiff = this.targetDate - dateNow;
      if (datesDiff < 0) {
        clearInterval(x);
        document.querySelector(this.selector).innerHTML = "EXPIRED";
      }
      const { days, hours, mins, secs } = getTimeComponents(datesDiff);
      updateClockFace({ days, hours, mins, secs }, refs);
    }, 1000);
  }
}

const ct = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 31, 2021"),
});

ct.start();

function getTimeComponents(time) {
  const days = padTime(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = padTime(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = padTime(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = padTime(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}

function padTime(value) {
  return String(value).padStart(2, "0");
}

const updateClockFace = ({ days, hours, mins, secs }, references) => {
  references.days.textContent = `${days}`;
  references.hours.textContent = `${hours}`;
  references.minutes.textContent = `${mins}`;
  references.seconds.textContent = `${secs}`;
};

