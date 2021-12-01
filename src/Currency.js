export default class CurrencyExchange {
  static async getCash() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/4dbcf6f936b0e474d7164311/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log('api call',response);
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}

