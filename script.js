const quotes = [
  "“The best way to predict the future is to invent it.” — Alan Kay",
  "“Simplicity is the soul of efficiency.” — Austin Freeman",
  "“First, solve the problem. Then, write the code.” — John Johnson",
  "“Talk is cheap. Show me the code.” — Linus Torvalds",
  "“Making the simple complicated is commonplace; making the complicated simple is creativity.” — Charles Mingus",
];

const quoteEl = document.querySelector(".quote");

function showRandomQuote() {
  const i = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[i];
}

document.querySelector(".new-quote").addEventListener("click", showRandomQuote);

const toggleEl = document.querySelector(".theme-toggle");
toggleEl.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");
  toggleEl.textContent = dark ? "Light mode" : "Dark mode";
});

showRandomQuote();
