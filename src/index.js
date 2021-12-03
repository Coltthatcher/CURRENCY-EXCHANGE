import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './Currency.js';

function calculateExchange(response, USD, country) {
  if (response.conversion_rates) {
    if(isNaN(response.conversion_rates[`${country}`])) {
      return $('.showErrors').text("Sorry, we couldn't convert that for you!");
    }
    $('.showRate').html(USD*response.conversion_rates[`${country}`]);
    }else{
      $('.showErrors').html(`Error: ${response.message}`);
  }
}


function menuLoop(response) {
  const obj = response.conversion_rates
  Object.keys(obj).forEach((key) => {
    let menuItem = `<option value="${key}">${key}</option>`;
    $("#currencies").append(`${menuItem}`);
  });
} 




$(document).ready(function() {
  CurrencyExchange.getCash()
    .then(function(response) {
      menuLoop(response);
    })
  $('#getRate').click(function(event) {
    event.preventDefault();
    $('.showErrors').empty();
    const country = $('#currencies').val();
    const USD = $('#usdInput').val();
    CurrencyExchange.getCash()
    .then(function(response){
      calculateExchange(response, USD, country);
    });
  });
});

