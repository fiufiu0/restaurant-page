// <div id="content">
//       <div class="header">
//         <a href="" class="name">Restaurant Name</a>
//         <ul class="links">
//           <li>Home</li>
//           <li>Menu</li>
//           <li>Contact</li>
//         </div>
//       </div>
//       <div class="main">
//         <div class="main-info">
//           <p>Welcome to Restaurant Name</p>
//           <p>Some dumb text</p>
//         </div>
//       </div>
//       <div class="footer">
//         <a href="">fiufiu0</a>
//       </div>
// </div>

function initialPage() {
  const content = document.getElementById("content");

  const header = document.createElement("div");
  header.classList.add("header");

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = "Restaurant";

  const links = document.createElement("ul");
  links.classList.add("links");

  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  home.textContent = "home";
  menu.textContent = "menu";
  contact.textContent = "contact";

  header.appendChild(name);
  header.appendChild(links);

  links.append(home, menu, contact);

  content.appendChild(header);
}

export { initialPage };
