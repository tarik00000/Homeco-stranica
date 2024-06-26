

//numbers up 
function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let minTimer = 50;
    let stepTime = Math.abs(Math.floor(duration / range));
    stepTime = Math.max(stepTime, minTimer);
    let startTime = new Date().getTime();
    let endTime = startTime + duration;
    let timer;
    function run() {
      let now = new Date().getTime();
      let remaining = Math.max((endTime - now) / duration, 0);
      let value = Math.round(end - (remaining * range));
      if (id === 'revenueCounter') {
        obj.innerHTML = `$${(value / 100).toFixed(2)}`;
      } else if (id === 'revenueCounter1' || id === 'revenueCounter2') { 
        obj.innerHTML = `+${(value / 100).toFixed(2)}%`;
      } else {
        obj.innerHTML = value.toLocaleString();
      }
      if (value == end) {
        clearInterval(timer);
      }
    }

    timer = setInterval(run, stepTime);
    run();
  }
  animateValue("revenueCounter2", 0, 350, 2000); 
  animateValue("revenueCounter1", 0, 4850, 2000);
  animateValue("revenueCounter", 0, 36845, 2000);
  animateValue("customerCounter", 0, 86590, 2000);

// scroll to top
  window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var btn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollToTop() {
    // Use scrollIntoView with behavior set to "smooth"
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const reviewContainer = document.querySelector('.review-container');
const navBack = document.querySelector('.back-ikona');
const navForward = document.querySelector('.naprijed-ikona');
const reviewBoxes = document.querySelectorAll('.review-box');

let currentIndex = 0;

navForward.addEventListener('click', function() {
  if (currentIndex < reviewBoxes.length - 1) {
    currentIndex++;
    slideReviewBoxes();
  }
});

navBack.addEventListener('click', function() {
  if (currentIndex > 0) {
    currentIndex--;
    slideReviewBoxes();
  }
});

function slideReviewBoxes() {
  const width = reviewBoxes[currentIndex].offsetWidth;
  const translateXValue = currentIndex > 0 ? -(width * (currentIndex - 1)) : 0;
  reviewContainer.style.transform = `translateX(${translateXValue}px)`;
  console.log(translateXValue);
  
}
