import { primary } from './primary.js';
console.log(primary[0]);
const emailList = document.querySelector('.email-list');
const pageInfoSpan = document.querySelector('#page-info');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const spinnerDiv = document.querySelector('#spinner');

let pageNumber = 0;
let limit = 15;

function createEmails(emails) {
  spinnerDiv.style.display = 'block';
  // console.log(Math.floor(emails.length / limit)); 5
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

  const start = pageNumber * limit + 1; // 0, 15, 30
  const end = (pageNumber + 1) * limit; // 15, 30, 45

  const partialEmails = emails.slice(start, end); //[]

  pageInfoSpan.innerText = `${start}-${end} of ${emails.length}`;

  setTimeout(() => {
    for (let email of partialEmails) {
      const emailTime = email.date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });

      const eachEmail = `<li id="${email.id}" class="email-item">
          <input type="checkbox" name="check-${email.id}" id="${email.id}" />
          <i class="fa fa-star"></i>
          <i class="fa fa-arrow-right"></i>
          <span class="email-sender">${email.senderEmail}</span>
          <span class="email-message">${email.messageTitle}</span>
          <span>${emailTime}</span>
        </li>`;
      emailList.innerHTML += eachEmail;
    }
    spinnerDiv.style.display = 'none';
  }, 800);
}

createEmails(primary);

prevBtn.addEventListener('click', function () {
  emailList.innerHTML = '';
  pageNumber--;
  createEmails(primary);
});

nextBtn.addEventListener('click', function () {
  emailList.innerHTML = '';
  pageNumber++;
  createEmails(primary);
});