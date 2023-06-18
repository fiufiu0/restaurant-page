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
  smoothieOneName.textContent = "Protein Smoothie";

  const smoothieOneDesc = document.createElement("p");
  smoothieOneDesc.classList.add("smoothieOneDesc");
  smoothieOneDesc.textContent = "Banana, strawberry, protein powder and almond milk blended with ice.";

  const smoothieOnePrice = document.createElement("p");
  smoothieOnePrice.classList.add("smoothieOnePrice");
  smoothieOnePrice.textContent = "$6.99";


  const smoothieTwo = document.createElement("div");
  smoothieTwo.classList.add("smoothieTwo");

  const smoothieTwoText = document.createElement("div");
  smoothieTwoText.classList.add("smoothieTwoText");

  const smoothieTwoName = document.createElement("p");
  smoothieTwoName.classList.add("smoothieTwoName");
  smoothieTwoName.textContent = "Green Smoothie";

  const smoothieTwoDesc = document.createElement("p");
  smoothieTwoDesc.classList.add("smoothieTwoDesc");
  smoothieTwoDesc.textContent = "Kale, spinach, banana, mango and pineapple blended with ice.";

  const smoothieTwoPrice = document.createElement("p");
  smoothieTwoPrice.classList.add("smoothieTwoPrice");
  smoothieTwoPrice.textContent = "$8.99";


  const smoothieThree = document.createElement("div");
  smoothieThree.classList.add("smoothieThree");

  const smoothieThreeText = document.createElement("div");
  smoothieThreeText.classList.add("smoothieThreeText");

  const smoothieThreeName = document.createElement("p");
  smoothieThreeName.classList.add("smoothieThreeName");
  smoothieThreeName.textContent = "Almond Smoothie";

  const smoothieThreeDesc = document.createElement("p");
  smoothieThreeDesc.classList.add("smoothieThreeDesc");
  smoothieThreeDesc.textContent = "Almond butter blended with Banana Strawberry and almond milk blended with ice.";

  const smoothieThreePrice = document.createElement("p");
  smoothieThreePrice.classList.add("smoothieThreePrice");
  smoothieThreePrice.textContent = "$4.99";



  smoothieOneText.append(smoothieOneName, smoothieOneDesc, smoothieOnePrice);
  smoothieOne.appendChild(smoothieOneText);

  smoothieTwoText.append(smoothieTwoName, smoothieTwoDesc, smoothieTwoPrice);
  smoothieTwo.appendChild(smoothieTwoText);

  smoothieThreeText.append(smoothieThreeName, smoothieThreeDesc, smoothieThreePrice);
  smoothieThree.appendChild(smoothieThreeText);

  menuContent.append(smoothieOne, smoothieTwo, smoothieThree);

  content.append(menuContent);

  footer();
}

export { menu };
