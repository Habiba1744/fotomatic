const myButton = document.querySelector(".cv");
const portfolioButton = document.querySelector(".portfolio");

myButton.addEventListener("click", function () {
  window.location.href =
    "https://docs.google.com/document/d/1BWyh6e1umMDoW9WNgcDDZT1Nn_uriEXmDYtQBuNr3JY/edit?usp=sharing";
});

portfolioButton.addEventListener("click", function () {
  window.location.href = "https://www.behance.net/habibasalah7"; //change the Link here with your behance link
});

console.log("i work");
