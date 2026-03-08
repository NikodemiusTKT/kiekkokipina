// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
if (hamburger) {
  hamburger.addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  });
}

const startButton = document.getElementById("start-button");
if (startButton) {
  startButton.addEventListener("click", function () {
    document.location.replace("./perusteet.html");
  });
}

// Add event listener for "Learn Discs" button
const learnDiscsButton = document.getElementById("learn-discs-button");
if (learnDiscsButton) {
  learnDiscsButton.addEventListener("click", function () {
    document.location.replace("./kiekot.html");
  });
}

// Add event listener for "Learn Basics" button
const learnBasicsButton = document.getElementById("learn-basics-button");
if (learnBasicsButton) {
  learnBasicsButton.addEventListener("click", function () {
    document.location.replace("./perusteet.html");
  });
}

// Add event listener for "Learn Throws" button
const learnThrowsButton = document.getElementById("learn-throws-button");
if (learnThrowsButton) {
  learnThrowsButton.addEventListener("click", function () {
    document.location.replace("./heitot.html");
  });
}

// Mobile Table of Contents Accordion
const tocToggle = document.getElementById("toc-toggle");
const tocMenu = document.getElementById("toc-menu");

// Toggle the mobile TOC menu
if (tocToggle) {
  tocToggle.addEventListener("click", function () {
    tocToggle.classList.toggle("active");
    tocMenu.classList.toggle("active");
  });

  // Close menu when a link is clicked
  const tocLinks = tocMenu.querySelectorAll("a");
  tocLinks.forEach((link) => {
    link.addEventListener("click", function () {
      tocToggle.classList.remove("active");
      tocMenu.classList.remove("active");
    });
  });
}

// Add event listeners for disc category buttons
const puttersButton = document.getElementById("putters-button");
if (puttersButton) {
  puttersButton.addEventListener("click", function () {
    const puttersSection = document.getElementById("discgolf-putter");
    puttersSection.scrollIntoView({ behavior: "smooth" });
    console.log("Putters button clicked");
  });
}

const midrangeButton = document.getElementById("midrange-button");
if (midrangeButton) {
  midrangeButton.addEventListener("click", function () {
    const midrangeSection = document.getElementById("discgolf-midrange");
    midrangeSection.scrollIntoView({ behavior: "smooth" });
  });
}
const fairwayButton = document.getElementById("fairway-driver-button");
if (fairwayButton) {
  fairwayButton.addEventListener("click", function () {
    const fairwaySection = document.getElementById("discgolf-fairway");
    fairwaySection.scrollIntoView({ behavior: "smooth" });
  });
}
const driverButton = document.getElementById("distance-driver-button");
if (driverButton) {
  driverButton.addEventListener("click", function () {
    const distanceDriverSection = document.getElementById(
      "discgolf-distance-driver",
    );
    distanceDriverSection.scrollIntoView({ behavior: "smooth" });
  });
}
