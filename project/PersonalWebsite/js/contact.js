document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log('Form submitted:', { name, email, phone, subject, message });

    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');

    this.reset();

    setTimeout(function () {
        successMessage.classList.remove('show');
    }, 5000);
});