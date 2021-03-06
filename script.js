const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newFactBtn = document.getElementById('new-fact');
const newJokeBtn = document.getElementById('new-joke');
const newQuoteBtn = document.getElementById('new-quote');
const newRiddleBtn = document.getElementById('new-riddle');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
    authorText.classList.remove('blur');
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quote
function newQuote() {
    loading();

    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;

    complete();
}

// Get Quotes From API
async function getQuotes() {
    loading();

    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
        alert(error);
    }
}

async function getFact() {
    loading();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0718b1cea3msh87467e9c6d5eb8cp11c844jsnad4e41e6c298',
            'X-RapidAPI-Host': 'random-facts4.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch('https://random-facts4.p.rapidapi.com/get', options);
        fact = await response.json();
    } catch (error) {
        alert(error);
    }

    quoteText.textContent = fact[0].description;
    authorText.textContent = fact[0].topic + ', ' + fact[0].subtopic;

    complete();
}

async function getJoke() {
    loading();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0718b1cea3msh87467e9c6d5eb8cp11c844jsnad4e41e6c298',
            'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch('https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&safe-mode', options);
        joke = await response.json();
    } catch (error) {
        alert(error);
    }
    
    if (!joke.setup) {
        quoteText.textContent = joke.joke;
        authorText.textContent = '';
    } else {
        quoteText.textContent = joke.setup;
        authorText.textContent = joke.delivery;
    }
    
    complete();
}

function newRiddle() {
    loading();

    riddle = localRiddles[Math.floor(Math.random() * localRiddles.length)];
    if (riddle.question) {
        quoteText.textContent = riddle.question;
    } else {
        quoteText.textContent = riddle.riddle;
    }

    authorText.textContent = riddle.answer;
    authorText.classList.add('blur');

    complete();
}

// Event Listeners
newFactBtn.addEventListener('click', getFact);
newJokeBtn.addEventListener('click', getJoke);
newQuoteBtn.addEventListener('click', newQuote);
newRiddleBtn.addEventListener('click', newRiddle);

// On Load
getQuotes();