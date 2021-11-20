import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './Currency.js';

function calculateExchange(response, USD, newCountry) {
  if (response.conversion_rates) {
    if(isNaN(response.conversion_rates[`${newCountry}`])) {

    }
  }
}


function menuLoop(response) {
  const obj = response.conversion_rates
  Object.keys(obj).forEach((key) => {
    let menuItem = `<option value="${key}">${key}</option>`;
    $("#currencies").append(`${menuItem}`);
    console.log(menuItem)
  });
}



getMenu();

$('#getRate').click(function() {
  makeApiCall();
  getElements();
  menuLoop();
});
