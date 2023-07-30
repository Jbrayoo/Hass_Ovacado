function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            console.log('Email sent successfully!');
            displaySuccessMessage();
        } else {
            console.error('Failed to send email.');
            // You can show an error message to the user here if needed
        }
    })
    .catch(error => {
        console.error('Error occurred:', error);
        // You can show an error message to the user here if needed
    });
}

function displaySuccessMessage() {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = 'We will get back to you soon!';
    document.body.appendChild(popup);

    setTimeout(() => {
        document.body.removeChild(popup);
    }, 3000); // Remove the pop-up message after 3 seconds
}
