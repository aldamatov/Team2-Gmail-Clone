import { primary } from "./emails/primary.js";
import { social } from "./emails/social.js";
import { promotions } from "./emails/promotions.js";

const emailListPrimary = document.querySelector("#primary");
const emailListSocial = document.querySelector("#social");
const emailListPromo = document.querySelector("#promo");
const pageInfoSpan = document.querySelector(".order");

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

/* Emails In primary */
let pageNumber = 0;
let limit = 20;

function createPrimaryEmails(emails) {
  console.log(pageNumber);
  if (pageNumber === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  const lastPage = Math.floor(emails.length / limit);

  if (pageNumber === lastPage) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }

  const start = pageNumber * limit;
  const end = (pageNumber + 1) * limit;

  const partialEmails = emails.slice(start, end);

  pageInfoSpan.innerText = `${start}-${end} of ${emails.length}`;
  for (let email of partialEmails) {
    const emailTime = new Date(email.date).toLocaleString("au-AU", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    //<span class="tooltiptext">${email.senderEmail}</span>
    const eachEmail = `
                <div class="mail-container">
                           
                   
                      <div class="mail-icons-left">
                             <input type="checkbox" name="check-${email.id}" id="${email.id}">
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-flag"></i>
                              <h4 class="title">${email.senderName}</h4>
                        </div>
                        <div class="mail-content">
                               <p class="subject">${email.messageTitle} <span class="sub-text">- Lorem ipsum dolor sit amet.</span></p>
                        </div>
                        <div class="mail-icons-right">
                              <i class="fa-solid fa-box-archive"></i>
                              <i class="fa-regular fa-trash-can"></i>
                              <i class="fa-regular fa-envelope"></i>
                              <i class="fa-regular fa-clock"></i>
                          </div>
                          <div class="time-date">${emailTime}</div>
                    </div>`;

    emailListPrimary.innerHTML += eachEmail;
  }
}
createPrimaryEmails(primary);

nextBtn.addEventListener("click", function () {
  emailListPrimary.innerHTML = "";
  pageNumber++;
  createPrimaryEmails(primary);
});

prevBtn.addEventListener("click", function () {
  console.log(primary);
  emailListPrimary.innerHTML = "";
  pageNumber--;
  createPrimaryEmails(primary);
});

// function filterMails(emails) {
//   const text = emails.messages[0].message.toLowerCase();

//   document.querySelectorAll(".mail-container").forEach(function (email) {
//     const item = email.textContent;
//     if (item.toLowerCase().indexOf(email) !== -1) {
//       email.style.display = "block";
//     } else {
//       email.style.display = "none";
//     }
//   });
// }
// filterMails(primary);
