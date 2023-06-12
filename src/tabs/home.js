import { footer } from "../footer";
import { initialPage } from "../initial";

//       <div class="main">
//         <div class="main-info">
//           <p>Welcome to Restaurant Name</p>
//           <p>Some dumb text</p>
//         </div>
//       </div>

function home() {
  initialPage();

  console.log("home")
  const content = document.getElementById("content");

  const main = document.createElement('div');
  const mainContent = document.createElement('div');
  const mainText = document.createElement('p');
  const mainSubtext = document.createElement('p');

  main.classList.add('main');
  mainContent.classList.add('main-info');

  mainText.classList.add('mainText');
  mainSubtext.classList.add('mainSubtext');
  mainText.textContent = "Welcome to restaurant"
  mainSubtext.textContent = "Some information about restaurant"

  main.appendChild(mainContent)
  mainContent.append(mainText, mainSubtext);

  content.append(main);

  footer();

}

export { home };
