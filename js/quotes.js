const quotes = [
    {
        quote: "All would live long, but none would be old",
        author: "Benjamin Franklin",
    },
    {
        quote: "Life is not fair, get used to it.",
        author: "Bill Gates",
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell",
    },
    {
        quote: "What do you want a meaning for? Life is a desire, not a meaning.",
        author: "Charlie Chaplin",
    },
    {
        quote: "It is not always the same thing to be a good man and a good citizen.",
        author: "Aristotle",
    },
    {
        quote: "The gratification comes in the doing, not in the results.",
        author: "James Dean",
    },
]

const quote = document.querySelector("#quote-area span:first-child");
const author = document.querySelector("#quote-area span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;