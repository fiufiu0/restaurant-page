import { footer } from "../footer";
import { initialPage } from "../initial";

function home() {
  initialPage();

  const content = document.getElementById("content");

  const main = document.createElement("div");
  const mainContent = document.createElement("div");
  const mainText = document.createElement("p");
  const mainSubtext = document.createElement("p");

  main.classList.add("main");
  mainContent.classList.add("main-info");

  mainText.classList.add("mainText");
  mainSubtext.classList.add("mainSubtext");
  mainText.textContent = "Welcome to Lemon Smoothie!";
  mainSubtext.textContent = "All natural, all healthy. Our smoothies are made with the highest quality fresh fruits. Start your day with the energy to conquer it.";

  main.appendChild(mainContent);
  mainContent.append(mainText, mainSubtext);

  content.append(main);

  footer();
}

export { home };
