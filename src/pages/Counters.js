import { countersData } from "../data/main.js";

export function countersSection() {
    const counters = document.getElementById("counters");
    counters.innerHTML = `
     <div class="container">
      <div class="row my-auto text-center ">
    <div class=" col-md-3 mb-4 ">
        <h2 class=" fw-bolder text-light">${countersData.Clients}</h2>
     <p class="fw-bolder text-secondary">Clients</p>
    </div>
    <div  class=" col-md-3 mb-4 "> <h2 class=" fw-bolder text-light">${countersData.Projects}</h2>
     <p class="fw-bolder text-secondary">Projects</p>
    </div>
  <div class=" col-md-3 mb-4 ">
         <h2 class=" fw-bolder text-light">${countersData.HoursOfSupport}</h2>
     <p class="fw-bolder text-secondary">Hours Of Support</p>
  </div>
   <div class=" col-md-3 mb-4 ">
      <h2 class=" fw-bolder text-light">${countersData.Awards}</h2>
     <p class="fw-bolder text-secondary">Awards</p>
   </div>
      </div>
    </div>
    
    `
} 
