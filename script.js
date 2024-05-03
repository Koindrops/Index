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




