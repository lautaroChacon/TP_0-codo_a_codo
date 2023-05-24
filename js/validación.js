const form = document.getElementById('contact-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }
    const name = document.getElementById('name');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    if (!name.value || !subject.value || !message.value) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    alert('El formulario se ha enviado correctamente.');
    form.reset();
  });

  form.setAttribute('action', 'https://formspree.io/popiribnikar@gmail.com');
  