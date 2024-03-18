document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        mobileNumber: document.getElementById('mobileNumber').value,
        emailSubject: document.getElementById('emailSubject').value,
        message: document.getElementById('message').value
    };

    // Send form data to backend server
    fetch('/api/submissions/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            // Successful submission
            console.log('Message sent successfully!');
            // You can redirect the user or show a success message here
        } else {
            // Error in submission
            console.error('Failed to send message.');
            // Handle error, show error message, etc.
        }
    })
    .catch(error => {
        console.error('Error sending message:', error);
        // Handle error, show error message, etc.
    });
});
