$(function () {
  $('a[href^="#"]').click(function () {
    var target = $(this).attr("href");
    if ($(window).width() < 1024) {
      $("html, body").animate({ scrollTop: $(target).offset().top - 160 }, 200);
      return false;
    } else {
      $("html, body").animate({ scrollTop: $(target).offset().top - 107 }, 200);
      return false;
    }
  });
});

// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// for selecting different controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrecy = document.querySelector(".from");
var toCurrecy = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;
var give = document.getElementById("give");
var geting = document.getElementById("geting");
var result = document.getElementById("result");

// Event when currency is changed
fromCurrecy.addEventListener("change", (event) => {
  resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrecy.addEventListener("change", (event) => {
  resultTo = `${event.target.value}`;
});

search.addEventListener("input", updateValue);

// function for updating value
function updateValue(e) {
  searchValue = e.target.value;
}

// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);

// function getresults
function getResults() {
  fetch(`${api}`)
    .then((currency) => {
      return currency.json();
    })
    .then(displayResults);
}

// display results after convertion
function displayResults(currency) {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  finalValue.innerHTML = ((toRate / fromRate) * searchValue).toFixed(2);
  finalAmount.style.display = "block";

  give.value = fromCurrecy.value;
  geting.value = toCurrecy.value;
  result.value = finalValue.value;
}

// when user click on reset button
function clearVal() {
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHTML = "";
}
