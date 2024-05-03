function toggleMenu() {
  const nav = document.getElementById('menu');
  nav.classList.toggle('active');
}





function copyText() {
            const partialTextElement = document.querySelector('.partial-copy-text');
            const fullTextElement = document.querySelector('.full-copy-text');
            
            // Toggle visibility of partial and full text
            partialTextElement.style.display = 'none';
            fullTextElement.style.display = 'inline';

            const text = fullTextElement.innerText;

            navigator.clipboard.writeText(text).then(function() {
                alert('Text copied to clipboard: ' + text);
                
                // Reset visibility after copying
                partialTextElement.style.display = 'inline';
                fullTextElement.style.display = 'none';
            }, function(err) {
                console.error('Unable to copy text: ', err);
                
                // Reset visibility on error
                partialTextElement.style.display = 'inline';
                fullTextElement.style.display = 'none';
            });
        }







document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.toggle-btn');
  const tocContainer = document.querySelector('.Tcontainer');

  toggleBtn.addEventListener('click', function() {
    tocContainer.classList.toggle('toc-expanded');
  });
});






document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();

        if (email !== '') {
            // Replace 'YOUR_API_KEY' and 'YOUR_LIST_ID' with your actual EmailOctopus API key and list ID
            const apiKey = 'YOUR_API_KEY';
            const listId = 'YOUR_LIST_ID';
            const apiUrl = `https://emailoctopus.com/lists/${listId}/members/embedded/1.0/add`;

            const data = {
                api_key: apiKey,
                email_address: email,
                status: 'subscribed'
            };

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(result => {
                console.log('Successfully subscribed:', result);
                // Optionally, you can display a success message to the user
            })
            .catch(error => {
                console.error('Error subscribing:', error.message);
                // Optionally, you can display an error message to the user
            });
        } else {
            // Handle empty email input
        }
    });
});




document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the email input value
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim(); // Trim any leading/trailing spaces

    // Validate the email format using a regular expression
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        // Email format is incorrect, show an error message to the user
        emailInput.setCustomValidity('Please enter a valid email address.');
        emailInput.reportValidity(); // Show the error message to the user
        return; // Exit the function, don't submit the form
    }

    // Prepare the data to send to SheetDB
    const dataToSend = {
        email: email
        // Add other fields if needed
    };

    const sheetdbApiUrl = 'https://sheetdb.io/api/v1/qhzpuahn1u9wa'; // Your actual SheetDB API endpoint

    // Make POST request to SheetDB API
    fetch(sheetdbApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data sent successfully:', data);
        // Optionally, show a success message to the user
        alert('Subscription successful!'); // Example of a success message
    })
    .catch(error => {
        console.error('Error sending data:', error);
        // Optionally, show an error message to the user
        alert('Subscription failed. Please try again later.'); // Example of an error message
    });
});