class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    let lastDate=Date.now();
     const timer = document.querySelector(this.selector);
     const fields = timer.children;
    console.log(timer.children)

    const x = setInterval(() => {
      
      const dateNow = Date.now();
      const datesDiff = this.targetDate - dateNow;
      if (datesDiff<0) {
        clearInterval(x);
        document.getElementById("timer-1").innerHTML = "EXPIRED";
      }
      const { days, hours, mins, secs } = getTimeComponents(datesDiff);
      updateClockFace({ days, hours, mins, secs }, this.selector);
    }, 1000);
  }
}



const ct = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 22, 2021"),
});

ct.start()

function getTimeComponents(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
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

// function padDays(value) {
//   return String(value).padStart(3, "0");
// }

const updateClockFace = ({ days, hours, mins, secs }, selector) => {
  const fields = document.querySelector(selector).children;
  [...fields].forEach((field) => {
    const spans = field.children;
    [...spans].forEach((element) => {
      const attrDatasetValue = element.dataset.value;
     
      if (attrDatasetValue === "mins") {
        element.parentNode.querySelector(".value").textContent = `${mins}`;
      }
      if (attrDatasetValue === "days") {
        element.parentNode.querySelector(".value").textContent = `${days}`;
      }
      if (attrDatasetValue === "hours") {
        element.parentNode.querySelector(".value").textContent = `${hours}`;
      }
      if (attrDatasetValue === "secs") {
        element.parentNode.querySelector(".value").textContent = `${secs}`;
      }
    });
  });
};

const getProp = (propName, selector) => {
  const fields = document.querySelector(selector).children;
  
  [...fields].forEach((field) => {
    const spans = field.children;
    
    [...spans].forEach((element) => {
      
      const attrDatasetValue = element.dataset.value;
     
      if (attrDatasetValue === propName) {
        console.log(attrDatasetValue, propName)
        console.log(attrDatasetValue === propName)
        console.log(element.parentNode.parentNode)
       element.innerHTML;
      }
      // if (attrDatasetValue === "days") {
      //   return element.parentNode.querySelector(".value");
      // }
      // if (attrDatasetValue === "hours") {
      //   return element.parentNode.querySelector(".value");
      // }
      // if (attrDatasetValue === "secs") {
      //   return element.parentNode.querySelector(".value");
      // }
    });
  });
};


// const animate = (dateNow, lastDate, selector) => {
// const dateNowObj = new Date(dateNow);
// const lastDateObj = new Date(lastDate);

// if (dateNowObj.getSeconds() !== lastDateObj.getSeconds()) {

// }
//   if (dateNow !== lastDate) {
//     console.log(dateNowObj.getMonth(), lastDateObj.getDay());
//     console.log(document.querySelectorAll(".value"))
//     document.querySelectorAll(".value").forEach(element => {
//       element.classList.add('animate__fadeOut');
//     });
    
//     setTimeout(function(){
//       document.querySelectorAll(".value").forEach(element => {
//         element.classList.remove('animate__fadeOut');
//       })
    
//     }, 500);
//   }
// }

// const animate = (dateNow, lastDate, selector) => {

//   const dateNowObj = new Date(dateNow);
//   const lastDateObj = new Date(lastDate);

//   if (dateNowObj.getSeconds() !==  lastDateObj)
// }