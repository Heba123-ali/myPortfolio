import { PortfolioData } from "../data/main.js";

export function portfolioSection() {
  const portfolio = document.getElementById("portfolio");
  portfolio.innerHTML = `
    <div class="container">
      <h2 class="text-center underline mb-4">portfolio</h2>
      <p class="text-center text-secondary mb-5">
        "Explore my work and creative project collection."
      </p>
      <ul class="d-flex text-center gap-3 align-items-center justify-content-center mb-4">
        <li class="active" data-filter="All">All</li>
        <li data-filter="Products">Products</li>
        <li data-filter="Branding">Branding</li>
        <li data-filter="Books">Books</li>
      </ul>
      <div class="row" id="portfolio-gallery">
        <!-- الصور هتتحط هنا ديناميك -->
      </div>
    </div>
  `;

  const listItem = document.querySelectorAll("#portfolio ul li");
  const gallery = document.getElementById("portfolio-gallery");
  function displayImages(category) {
    gallery.innerHTML = ""; 

    if (category === "All") {
      // نعرض كل الصور في أعمدة
      Object.keys(PortfolioData).forEach(cat => {
        PortfolioData[cat].forEach(src => {
          const col = document.createElement("div");
          col.className = "col-md-4 mb-4";
          col.innerHTML = `<img src="${src}" alt="" class="w-100 rounded shadow">`;
          gallery.appendChild(col);
        });
      });
    } else {
      // نعرض فئة واحدة في صف
      const row = document.createElement("div");
      row.className = "d-flex justify-content-center flex-wrap gap-3";
      PortfolioData[category].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = category;
        img.className = "img-fluid";
        img.style.maxWidth = "30%"; // علشان 3 صور جنب بعض
        row.appendChild(img);
      });
      gallery.appendChild(row);
    }
  }

  // نعرض الكل في الأول
  displayImages("All");

  // تعامل مع الفلاتر
  listItem.forEach(link => {
    link.addEventListener("click", function () {
      listItem.forEach(item => item.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");
      displayImages(filter);
    });
  });
}
