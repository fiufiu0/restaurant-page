function footer() {
  const footerContainer = document.createElement("div");
  const footerText = document.createElement("p");

  footerContainer.classList.add("footer");
  footerText.classList.add("footer-text");

  footerText.textContent = "Created by fiufiu0";

  footerContainer.appendChild(footerText);
  document.querySelector("#content").appendChild(footerContainer);
}

export { footer };
