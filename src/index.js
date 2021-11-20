import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './Currency.js';

function calculateExchange(response, key) {
  if (response.conversion_rates) {
    if(isNaN(response.conversion_rates[`${key}`])) {
      return $('.showErrors').text("Sorry, we couldn't convert that for you!");
    }
    $('.showRate').html((`${key}`/response.conversion_rates[`${key}`]));
    }else{
      $('.showErrors').html(`Error: ${response.message}`);
  }
}


function menuLoop(response,) {
  const obj = response.conversion_rates
  Object.keys(obj).forEach((key) => {
    let menuItem = `<option value="${key}">${key}</option>`;
    $("#currencies").append(`${menuItem}`);
    console.log(menuItem)
  });
}





$('#getRate').click(function() {
  CurrencyExchange.getCash()
  .fetch(function(response) {
    calculateExchange(response)
    menuLoop();
  });
});
