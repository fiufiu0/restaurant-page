import { footer } from "../footer";
import { initialPage } from "../initial";

function contact() {
  initialPage();

  const content = document.getElementById("content");
  const contact = document.createElement("div");
  const contactInfo = document.createElement("div");
  const contactHours = document.createElement("div");
  const email = document.createElement("p");
  const adress = document.createElement("p");
  const phone = document.createElement("p");
  const weekdays = document.createElement("p");
  const weekend = document.createElement("p");

  contact.classList.add("contact");
  contactInfo.classList.add("contactInfo");
  contactHours.classList.add("contactHours");

  email.textContent = "lemon@smoothie.com";
  adress.textContent = "62 Madison Ave, New York, NY 10016";
  phone.textContent = "+1 234-456-7890";
  weekdays.textContent = "Monday - Friday: 8am - 7pm";
  weekend.textContent = "Saturday - Sunday: 9am - 7pm";

  contactInfo.append(email, adress, phone)
  contactHours.append(weekdays,weekend);
  contact.append(contactInfo,contactHours);

  content.appendChild(contact)

  footer();
}

export { contact };
