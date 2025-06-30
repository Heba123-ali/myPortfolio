import { navData } from "../data/main.js";

export function headerSection() {
    const nav = document.getElementById("nav");
    nav.innerHTML = `
        <div class="container">
          <a href="#" class="navbar-brand logo">${navData.brand}</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto" id="nav-links"></ul>
            </div>
          </div>
    `;
    
    const navLinks = document.getElementById("nav-links");
    navData.links.forEach(link => {
  const li = document.createElement("li");
  li.classList.add("nav-item");
  const isActive = link.name.toLowerCase() === "home" ? "active" : "";
  if (link.type === "dropdown") {
    li.classList.add("dropdown");
    li.innerHTML = `
      <a class="nav-link dropdown-toggle text-white ${isActive}"
         href="#"
         role="button"
         data-bs-toggle="dropdown"
         aria-expanded="false">
         ${link.name}
      </a>
      <ul class="dropdown-menu dropdown-menu-dark">
        ${link.item.map(item => `
          <li><a class="dropdown-item" href="${item.href}">${item.name}</a></li>
        `).join("")}
      </ul>
    `;
  } else {
    li.innerHTML = `
      <a class="nav-link text-white ${isActive}" href="${link.href}">${link.name}</a>
    `;
  }

  navLinks.appendChild(li);
    });
    
    const navItem = document.querySelectorAll(".nav-link");
    navItem.forEach(link => {
        link.addEventListener("click", function () {
            navItem.forEach(item => item.classList.remove("active"))
            this.classList.add("active");      
        })
    })
   
}

 