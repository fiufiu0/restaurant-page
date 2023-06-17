//  <div class="menu">
//
//         <div class="menu-content">
//           <div class="smoothie">
//             <div class="smoothie-text">
//               <p class="smoothie-name">Smoothie1</p>
//               <p class="smoothie-desc">Description</p>
//               <p class="smoothie-price">$4.99</p>
//             </div>
//             <div class="smoothie-img">
//               <p>img</p>
//             </div>
//           </div>
//           <div class="smoothie">
//             <div class="smoothie-text">
//               <p class="smoothie-name">Smoothie1</p>
//               <p class="smoothie-desc">Description</p>
//               <p class="smoothie-price">$4.99</p>
//             </div>
//             <div class="smoothie-img">
//               <p>img</p>
//             </div>
//           </div>
//           <div class="smoothie">
//             <div class="smoothie-text">
//               <p class="smoothie-name">Smoothie1</p>
//               <p class="smoothie-desc">Description</p>
//               <p class="smoothie-price">$4.99</p>
//             </div>
//             <div class="smoothie-img">
//               <p>img</p>
//             </div>
//           </div>
//         </div>
//       </div>

import { footer } from "../footer";
import { initialPage } from "../initial";

function menu() {
  initialPage();

  const content = document.getElementById("content");

  const menu = document.createElement("div");
  menu.classList.add("menu");
  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");

  const smoothieOne = document.createElement("div");
  smoothieOne.classList.add("smoothieOne");

  const smoothieOneText = document.createElement("div");
  smoothieOneText.classList.add("smoothieOneText");

  const smoothieOneName = document.createElement("p");
  smoothieOneName.classList.add("smoothieOneName");
  smoothieOneName.textContent = "Lemon Smoothie";

  const smoothieOneDesc = document.createElement("p");
  smoothieOneDesc.classList.add("smoothieOneDesc");
  smoothieOneDesc.textContent = "Lemoon smoothie very feshy!";

  const smoothieOnePrice = document.createElement("p");
  smoothieOnePrice.classList.add("smoothieOnePrice");
  smoothieOnePrice.textContent = "$4.99";

  smoothieOneText.append(smoothieOneName, smoothieOneDesc, smoothieOnePrice);
  smoothieOne.appendChild(smoothieOneText);

  menuContent.appendChild(smoothieOne);

  content.append(menuContent);

  footer();
}

export { menu };
