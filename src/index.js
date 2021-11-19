import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CalculateRate from './calculaterate.js';
import CurrencyExchange from './Currency.js';

function getSelectedClass(response, currencyIndex) {
  return new CalculateRate(response[currencyIndex].conversion_rates("#usdInputForm").val(), $('#currencies option:selected').val());
}

function getElements(response) {
  if (response) {
    const currencyIndex= $('#currencies option:selected').valueOf();
    const selectedCurrency = getSelectedClass(response, currencyIndex)
    $('.showRate').html(selectedCurrency.getInfo());
    } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
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
    $('.showErrors').text(`there was an error; ${response}`)
  }
  }
}

