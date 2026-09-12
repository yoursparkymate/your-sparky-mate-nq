const menu = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');
if (menu && links) {
  menu.addEventListener('click', () => links.classList.toggle('open'));
}

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = form.querySelector('[data-form-status]');
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;

    button.disabled = true;
    button.textContent = 'Sending…';
    status.hidden = false;
    status.textContent = 'Sending your message…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = 'Thanks — your message has been sent to Your Sparky Mate NQ. We’ll be in touch as soon as possible.';
        form.reset();
      } else {
        status.textContent = 'Your message could not be sent. Please try again, email info@yoursparkymate.com, or call 0412 589 233.';
      }
    } catch (error) {
      status.textContent = 'Your message could not be sent. Please check your connection, email info@yoursparkymate.com, or call 0412 589 233.';
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
}
