window.addEventListener('DOMContentLoaded', event => {
    // Check if the page has loaded
    console.log("Page loaded, script running.");

    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent the form from refreshing the page
        console.log("Form submitted.");

        // Grab the input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Optional: Log the input values to check if they're correctly retrieved
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // Show a response message
        const responseMessage = document.getElementById('responseMessage');
        if (responseMessage) {
            responseMessage.style.color = 'green';
            responseMessage.textContent = `Thank you for reaching out, ${name}! We'll get back to you soon.`;
        } else {
            console.error("Response message element not found.");
        }

        // Clear the form
        document.getElementById('contactForm').reset();
    });

    // Get the button element
    const toggleButton = document.getElementById('toggleOpacityBtn');

    // Add event listener to toggle background opacity
    toggleButton.addEventListener('click', () => {
        // Check if body has the 'transparent' class
        if (document.body.classList.contains('transparent')) {
            // If it has, remove the 'transparent' class and add 'opaque'
            document.body.classList.remove('transparent');
            document.body.classList.add('opaque');
        } else {
            // If it doesn't, remove the 'opaque' class and add 'transparent'
            document.body.classList.remove('opaque');
            document.body.classList.add('transparent');
        }
    });

});