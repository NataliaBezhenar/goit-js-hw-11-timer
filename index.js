class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      days: document.querySelector(`${this.selector} span[data-value="days"]`),
      hours: document.querySelector(
        `${this.selector} span[data-value="hours"]`
      ),
      minutes: document.querySelector(
        `${this.selector} span[data-value="mins"]`
      ),
      seconds: document.querySelector(
        `${this.selector} span[data-value="secs"]`
      ),
    };

    this.start();
  }

  start() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const time = this.targetDate - Date.now();
    time > 0 ? this.getTimeComponents(time) : this.timeExpired();
  }

  timeExpired() {
    document.querySelector(this.selector).innerHTML = "EXPIRED";
  }

  getTimeComponents(time) {
    console.log(time);
    const days = this.padTime(Math.floor(time / (1000 * 60 * 60 * 24)));
    console.log("days", days);
    const hours = this.padTime(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    console.log("hours", hours);
    const mins = this.padTime(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    const secs = this.padTime(Math.floor((time % (1000 * 60)) / 1000));
    console.log({ days, hours, mins, secs });
    this.updateClockFace({ days, hours, mins, secs });
  }

  padTime(value) {
    return String(value).padStart(2, "0");
  }

  updateClockFace({ days, hours, mins, secs }) {
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.minutes.textContent = `${mins}`;
    this.refs.seconds.textContent = `${secs}`;
  }
}

const countdown = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 31, 2021"),
});
