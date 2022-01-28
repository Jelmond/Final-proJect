import './App.css';


const currencyReader = require('./EuroReader.js');


const getCurrencyEuro = currencyReader.getCurrencyEuro();
const getCurrencyUSD = currencyReader.getCurrencyUSD();
const getCurrencyRub = currencyReader.getCurrencyRub();


function App() {
  console.log(getCurrencyEuro);
  console.log(getCurrencyUSD);
  console.log(getCurrencyRub);
  return (
    <div className="App">
      {}
    </div>
  );
}

export default App;
