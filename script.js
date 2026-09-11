
const menu = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');
if(menu && links){
  menu.addEventListener('click',()=>links.classList.toggle('open'));
}
const form = document.querySelector('[data-complaint-form]');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const status = document.querySelector('[data-form-status]');
    status.textContent = 'Thanks — your complaint has been recorded on this page. To submit it directly to Adam, please call 0412 589 233 or connect this form to your preferred email/form service.';
    status.hidden = false;
    form.reset();
  });
}
