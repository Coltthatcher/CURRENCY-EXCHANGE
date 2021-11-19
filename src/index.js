import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CalculateRate from './calculaterate.js';
import CurrencyExchange from './Currency.js';

function getSelectedClass(response) {
  return new CalculateRate(response.CalculateRate("#usdInput").val(),
  $('#currencies option:selected').val());
}

function getElements(response) {
  if (response) {
    let currencyIndex= $('#currencies option:selected').valueOf();
    const selectedCurrency = CalculateRate(response);
    $('.showRate').html(selectedCurrency.getInfo());
    } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

function getElements(response) {
  if (response) {
    const
  }
  $('.showRate').html(response)
}

async function makeApiCall() {
  const response = await CurrencyExchange.getCash();
  getElements(response);
}

async function getMenu() {
  const response = await CurrencyExchange.getCash();
  if (response) {
    menuLoop(response);
  }else{
    $('.showErrors').text(`there was an error: ${response}`);
  }
}

function menuLoop(response) {
  const obj = response.conversion_rates
  Object.keys(obj).forEach((key,i) => {
    let menuItem = `<option value="${i}">${key}</option>`;
    $("#currencies").append(`${menuItem}`);
  });
}



getMenu();

$('#getRate').click(function() {
  makeApiCall();
});
