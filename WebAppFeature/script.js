document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate the fields
    if (!name || !email || !message) {
        alert('All fields are required.');
        return;
    }

    // Email validation (simple pattern check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Display success message
    const msg = document.getElementById('successMessage').style.display = 'block';
    
    // if (msg) {
    //     alert('Message sent successfully!');
    // }

    // Log data to console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);


    // Reset form
    document.getElementById('contactForm').reset();
});
