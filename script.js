console.clear();
// script 1 - text 

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
      start: "top", // Start when the top of the section hits the top of the viewport
      end: "+=100% ", // Animation lasts for the viewport height
      // end: "+=100%", // Animation lasts for the viewport height
      scrub: true, // Smooth synchronization with scrolling
      pin: true, // Keeps the section fixed during animation
    },
  });

  // script 2 - stacking cards
  // gsap.registerPlugin(ScrollTrigger);
  const cardsWrappers = gsap.utils.toArray(".card-wrapper");
  const cards = gsap.utils.toArray(".work-card");

  cardsWrappers.forEach((wrapper, i) => {
    const card = cards[i];
    let scale = 1,
      rotation = 0;
    if (i !== cards.length - 1) {
      scale = 0.9 + 0.025 * i;
      rotation = -10;
    }
    gsap.to(card, {
      scale: scale,
      rotationX: rotation,
      transformOrigin: "top center",
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        // start: "top " + (60 + 10 * i),
        start: "top " + (60 + 10 * i),
        end: "bottom 550",
        endTrigger: ".wrapper",
        scrub: true,
        pin: wrapper,
        pinSpacing: false,
        invalidateOnRefresh: true,
        // markers: {
        //     indent: 100 * i,
        //     startColor: "#0ae448",
        //     endColor: "#fec5fb",
        //     fontSize: "14px"
        // },
        id: i + 1
      }
    });

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
