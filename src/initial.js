import { changeTab } from ".";

function initialPage() {
  
  const content = document.getElementById("content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const header = document.createElement("div");
  header.classList.add("header");

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = "Lemon Smoothie";

  const links = document.createElement("ul");
  links.classList.add("links");

  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");
  home.setAttribute("id", "home");
  menu.setAttribute("id", "menu");
  contact.setAttribute("id", "contact");

  home.textContent = "home";
  menu.textContent = "menu";
  contact.textContent = "contact";

  header.appendChild(name);
  header.appendChild(links);

  links.append(home, menu, contact);

  content.appendChild(header);

  changeTab();
}

export { initialPage };
