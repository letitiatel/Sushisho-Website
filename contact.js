
 // Obține formularul
const form = document.querySelector('form');

// Adaugă evenimentul de ascultare pentru trimiterea formularului
form.addEventListener('submit', handleSubmit);

// Funcția de tratare a evenimentului de trimitere a formularului
function handleSubmit(event) {
  event.preventDefault(); // Oprește comportamentul implicit al formularului

  // Obține valorile introduse în câmpurile formularului
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea').value;

  // Creează un obiect formData pentru a stoca valorile formularului
  const formData = {
    name: name,
    email: email,
    message: message
  };

  // Afișează obiectul formData în consolă
  console.log(formData);

  // Resetarea valorilor câmpurilor formularului
  form.reset();

  // Afiseaza mesajul de confirmare in pagina web
  displayConfirmationMessage();
}

// Funcția pentru afișarea mesajului de confirmare
function displayConfirmationMessage() {
  // Creează elementul mesajului de confirmare
  const confirmationMessage = document.createElement('div');
  confirmationMessage.textContent = 'Message sent successfully!';
  confirmationMessage.classList.add('success-message');

  // Adaugă mesajul de confirmare în formularul existent
  //const contactForm = document.querySelector('.contactForm');
  contactForm.appendChild(confirmationMessage);

  // Șterge mesajul de confirmare după 3 secunde
  setTimeout(function() {
    confirmationMessage.remove();
  }, 3000);
}

  
  
  
  
  