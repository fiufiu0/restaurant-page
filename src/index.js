import { home } from "./tabs/home";
import { menu } from "./tabs/menu";
import { contact } from "./tabs/contact";
import "./style.css";

home();
// menu();
// contact();

function changeTab() {
  const homeTab = document.getElementById("home");
  const menuTab = document.getElementById("menu");
  const contactTab = document.getElementById("contact");

  homeTab.addEventListener("click", () => {
    console.log("home tab");
    home();
  });

  menuTab.addEventListener("click", () => {
    console.log("menu tab");
    menu();
  });

  contactTab.addEventListener("click", () => {
    console.log("contact tab");
    contact();
  });
}

export { changeTab };
