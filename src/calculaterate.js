export default class CalculateRate {
  constructor(exchange, currencies,usdAmount){
    this.exchange= exchange;
    this.currencies = currencies;
    this.usdAmount = usdAmount;
  }

  CalculateRate(usdAmount){
    return(usdAmount / this.exchange.toFixed(9));
  }
  getInfo(){
    return `The exchange for ${this.exchange} to this 1 USD`
  }
}