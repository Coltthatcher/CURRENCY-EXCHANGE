import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './Currency.js';




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
