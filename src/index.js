import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
//import CalculateRate from './calculaterate.js';
import CurrencyExchange from './Currency.js';

/*function getSelectedClass(response) {
  new CalculateRate(response.CalculateRate("#usdInput").val(),
  (".showRate")('#currencies option:selected').val());
}*/

function getElements(response) {
  if (response) {
    let currencyIndex= $('#currencies').find(":selected").val();

    console.log(currencyIndex)
    // const selectedCurrency = getSelectedClass(response);
    $('.showRate').html(/*selectedCurrency.getInfo()*/);
    } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}
/*CalculateRate(usdAmount){
  return(usdAmount / this.exchange.toFixed(9));
}
getInfo(){
  return `The exchange for ${this.exchange} to this 1 USD`
}*/


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
  getElements();
});
