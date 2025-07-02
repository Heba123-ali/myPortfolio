import { PortfolioData } from "../data/main.js";
export function portfolioSection() {
  const portfolio = document.getElementById("portfolio");
  portfolio.innerHTML = `
    <div class="container w-75 h-100">
      <h2 class="text-center underline mb-4">portfolio</h2>
      <p class="text-center text-secondary mb-5">
        "Explore my work and creative project collection."
      </p>
      <ul class="d-flex text-center gap-3 align-items-center justify-content-center mb-4">
        <li class="active" data-filter="All">All</li>
        <li data-filter="Products">Products</li>
        <li data-filter="Branding">Branding</li>
        <li data-filter="Apps">Apps</li>
        <li data-filter="Books">Books</li>
      </ul>
      <div class="row" id="portfolio-gallery">

      </div>
    </div>
  `;
  const listItem = document.querySelectorAll("#portfolio ul li");
  const gallery = document.getElementById("portfolio-gallery");

  function displayImages(category) {
    gallery.innerHTML = "";

    const renderImage = (src, category) => {
      const col = document.createElement("div");
      col.className = "col-md-3 mb-4 position-relative ";

      col.innerHTML = `
        <div class="img-box position-relative overflow-hidden rounded shadow w-100">
          <img src="${src}" alt="${category}" class="w-100">
          <div class="text-img p-2 w-100 h-50 d-flex align-items-center gap-5 bg-opacity-75 text-dark bg-white">
          <div>
            <h4 class=" fs-6 fw-bold">Website</h4>
          <p class="m-1 fs-6 fw-lighter">Front-end developer</p>
          </div>
           <div class="d-flex gap-1">
              <i class="fa-solid fa-magnifying-glass-plus"></i>
              <i class="fa-solid fa-link"></i>
            </div>
          </div>
        </div>
      `;
      gallery.appendChild(col);
    };
    if (category === "All") {
      Object.keys(PortfolioData).forEach(el => {
      PortfolioData[el].forEach(src => {
          renderImage(src, el);
        });
      });
    } else {
      PortfolioData[category]?.forEach(src => {
        renderImage(src, category);
      });
    }
    const boxes = document.querySelectorAll(".img-box");
    boxes.forEach(box => {
      const overlay = box.querySelector(".text-img");
      box.addEventListener("mouseenter", () => {
        overlay.style.opacity = "1";
      });
      box.addEventListener("mouseleave", () => {
        overlay.style.opacity = "0";
      });
    });
  }
  displayImages("All");
  listItem.forEach(link => {
    link.addEventListener("click", function () {
      listItem.forEach(item => item.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");
      displayImages(filter);
    });
  });
}
