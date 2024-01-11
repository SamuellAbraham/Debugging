"use strict";

let formEl = document.querySelector("#search"); // # is missing also quatation 
let cityInputEl = document.querySelector("#city"); // # is missing also o is missing in Selector
let tempEl = document.querySelector("#temp"); // # is missing 
let messageEl = document.querySelector("#message"); //# is missing

async function getData() {
  // Fetch data from Open Weather Map API, passing the input value as city
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl.value}&appid=8f20807cea52eed92572aea82df038d5`
  );
  let data = await res.json();

  // We get temperatures back in Kelvin so we need to convert nto Celsius
  // https://www.rapidtables.com/convert/temperature/kelvin-to-celsius.html
  let temp = data.main.temp - 273.15; //  data type error .main is missing

  tempEl.textContent = temp.toFixed(2)+"°C";    // should be backticks and for 

  // Different temperature ranges should print different messages:
  //
  // Below 0 = Winter is coming
  // 0-10 = Sweater weather
  // 11-20 = Put a jacket on and regret it as soon as you start moving
  // Above 21 = Hotter outside than Taylor Swift's latest single

  if (temp <= 0) {  //  in if statement here we need to put lessthen  and <= sign.
    messageEl.textContent = "Winter is coming...";
  } else if (temp <= 10) {
    messageEl.textContent = "Sweater weather!"
  } else if (temp <= 20) {
    messageEl.textContent = "Put a jacket on and regret it as soon as you start moving";
  } else   { //  here  we just need else and no perameaters 
    messageEl.textContent = "Hotter outside than Taylor Swift's latest single";
  }
}

formEl.addEventListener("submit", function (e) {  // finction is missing ()
 e.preventDefault(); // run time refrence error function should be invoked.
  getData();
});