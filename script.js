import {primary} from './emails/primary.js';
import {social} from './emails/social.js';
import {promotions} from './emails/promotions.js';

const emailListPrimary = document.querySelector('#primary');
const emailListSocial = document.querySelector('#social');
const emailListPromo = document.querySelector('#promo')
const pageInfoSpan = document.querySelector('.order')

/* Emails In primary */


function createPrimaryEmails(emails){
  for(let email of emails){
    const emailTime = new Date(email.date).toLocaleString('au-AU', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,

    })
    const eachEmail = `
                <div class="mail-container tooltip">
                           <span class="tooltiptext">${email.senderEmail}</span>
                   
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
                    </div>`
            emailListPrimary.innerHTML += eachEmail;
  }

}
createPrimaryEmails(primary);
/* Emails In primary End */


/* Emails In Social */
function createSocialEmails(emails){
  for(let email of emails){
    const emailTime = new Date(email.date).toLocaleString('au-AU', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,

    })
    const eachEmail = `
                <div class="mail-container">
                      <div class="mail-icons-left">
                             <input type="checkbox" name="check-${email.id}" id="${email.id}">
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-flag"></i>
                              <h4 class="title">${email.senderEmail}</h4>
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
                    </div>`
            emailListSocial.innerHTML += eachEmail;
  }

}
createSocialEmails(social);


/* Emails In Social End */
function createPromoEmails(emails){
  for(let email of emails){
    const emailTime = new Date(email.date).toLocaleString('au-AU', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,

    })
    const eachEmail = `
                <div class="mail-container">
                      <div class="mail-icons-left">
                             <input type="checkbox" name="check-${email.id}" id="${email.id}">
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-flag"></i>
                              <h4 class="title">${email.senderEmail}</h4>
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
                    </div>`
            emailListPromo.innerHTML += eachEmail;
  }

}
createPromoEmails(promotions);








/* Tabs */
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    console.log('> target: ', target);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
/* End Tabs */