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

let newQuoteCount = 0;
const countEl = document.querySelector(".visit-count");

document.querySelector(".new-quote").addEventListener("click", () => {
  showRandomQuote();
  newQuoteCount += 1;
  countEl.textContent = `New quotes this visit: ${newQuoteCount}`;
});

const copyEl = document.querySelector(".copy-quote");
copyEl.addEventListener("click", async () => {
  await navigator.clipboard.writeText(quoteEl.textContent);
  copyEl.textContent = "Copied!";
  setTimeout(() => (copyEl.textContent = "Copy"), 1500);
});

const toggleEl = document.querySelector(".theme-toggle");
toggleEl.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");
  toggleEl.textContent = dark ? "Light mode" : "Dark mode";
});

showRandomQuote();
