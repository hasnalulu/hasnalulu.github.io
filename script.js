

document.addEventListener("DOMContentLoaded", () => {
  const clones = document.querySelectorAll(".dynamic-text-clone > div");

  // Initialize GSAP with ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animate blur and opacity with GSAP
  gsap.to(clones, {
    filter: "blur(0px)", // Remove blur
    opacity: 1, // Fully opaque
    stagger: 0.1, // Slight delay between each word
    scrollTrigger: {
      trigger: "#section-two", // Starts when section-two enters viewport
      start: "top top", // Start when the top of the section hits the top of the viewport
      end: "+=100%", // Animation lasts for the viewport height
      scrub: true, // Smooth synchronization with scrolling
      pin: true, // Keeps the section fixed during animation
    },
  });
});



$(document).ready(function () {

  // $('video').get(0).playbackRate = 0.3;

  $(".ham-menu").click(function () {
    // $("menu").toggleClass("active");
    $(this).toggleClass("active");
    $(".menu-section").toggleClass("active-menu");
  });

  // $(".ham-menu").click(function () {
  //   $(".menu-section").addClass("active-menu");
  // })
  // $(".ham-menu span").click(function () {
  //   $(".menu-section").removeClass("active-menu");
  // })

  const video = document.getElementById("Video");
  video.playbackRate = 0.25; //

  const navbar = document.getElementById("glassNav");
  const scrollTopBtn = document.getElementById("scrollTop");

  // Show navbar after scrolling 5%
  window.addEventListener("scroll", function () {

    const scrollTop = window.scrollY;

    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercent = (scrollTop / documentHeight) * 100;

    if (scrollPercent >= 5) {
      navbar.classList.add("show");
    } else {
      navbar.classList.remove("show");
    }

  });

  // Scroll to top
  scrollTopBtn.addEventListener("click", function (e) {

    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });




  const track = document.querySelector(".icon-track");
  const tool = document.getElementById("toolName");

  const icons = [...track.children];

  icons.forEach(icon => {

    track.appendChild(icon.cloneNode(false));

  });

  let position = 0;

  let current = 0;

  const total = icons.length;

  function animate() {

    position += 0.5;

    track.style.transform = `translateY(-${position}px)`;

    const size = 116;

    current = Math.floor(position / size) % total;

    tool.innerHTML = icons[current].dataset.name;

    document.querySelectorAll(".icon-track img").forEach(i => {

      i.classList.remove("active");

    });

    const active = document.querySelectorAll(".icon-track img")[current];

    if (active) {

      active.classList.add("active");

    }

    if (position >= size * total) {

      position = 0;

    }

    requestAnimationFrame(animate);

  }

  animate();






});













