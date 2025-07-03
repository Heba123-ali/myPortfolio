import { aboutSection } from "./pages/Aboutme.js";
import { headerSection } from "./components/Header.js";
import { countersSection } from "./pages/Counters.js";
import { portfolioSection } from './pages/Portfolio.js';
document.addEventListener("DOMContentLoaded", ()=>{
    aboutSection();
    headerSection();
    countersSection();
    portfolioSection()
});

 const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });