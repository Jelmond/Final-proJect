async function getCurrencyEuro() {
    const app = await fetch(`https://www.nbrb.by/api/exrates/rates/euro?parammode=2`, {
        method: 'GET',
    })
    .then((response) => {
    return response.json()
    })
    .then((data) => {
    return console.log(data.Cur_OfficialRate);
    })
}

async function getCurrencyUSD() {
    const app = await fetch(`https://www.nbrb.by/api/exrates/rates/USD?parammode=2`, {
        method: 'GET',
    })
    .then((response) => {
    return response.json()
    })
    .then((data) => {
    return console.log(data.Cur_OfficialRate);
    })
}

async function getCurrencyRub() {
    const app = await fetch(`https://www.nbrb.by/api/exrates/rates/RUB?parammode=2`, {
        method: 'GET',
    })
    .then((response) => {
    return response.json()
    })
    .then((data) => {
    return console.log(data.Cur_OfficialRate);
    })
}

module.exports = {
    getCurrencyEuro,
    getCurrencyRub,
    getCurrencyUSD,
}