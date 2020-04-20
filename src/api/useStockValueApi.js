// Constants
const TIME_SERIES_DAILY = "Time Series (Daily)";
const TIME_SERIES_HOURLY = "Time Series (60min)";
const CLOSE_KEY = "4. close";

const createDailyApiUrl = (stockName, key) => {
    return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=${key}`;
}

const createHourlyApiUrl = (stockName, key) => {
    return `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockName}&apikey=${key}&interval=60min`;
}

export const getDailyValues = async (stockName) => {
    const response = await fetch(createDailyApiUrl(stockName, process.env.API_KEY));
    const json = await response.json();

    if (!json.hasOwnProperty(TIME_SERIES_DAILY)) {
        return false;
    }

    const dailyValues = json[TIME_SERIES_DAILY];
    const latestDate = Object.keys(dailyValues)[0];

    // Get all the values into priceMap
    var priceMap = {};
    
    for (var i in dailyValues) {
        priceMap[i] = parseFloat(dailyValues[i][CLOSE_KEY]);
    }

    return [latestDate, priceMap];

}

export const getHourlyValues = async (stockName) => {
    const response = await fetch(createHourlyApiUrl(stockName, process.env.API_KEY));
    const json = await response.json();

    if (!json.hasOwnProperty(TIME_SERIES_HOURLY)) {
        return false;
    }

    const hourlyValues = json[TIME_SERIES_HOURLY];
    const endHour = Object.keys(hourlyValues)[0];
    const startHour = Object.keys(hourlyValues)[1];

    const startPrice = hourlyValues[startHour]["1. open"];
    const endPrice = hourlyValues[endHour]["1. open"];

    console.log(stockName + " | " + startHour + " | " + startPrice)
    console.log(stockName + " | " + endHour + " | " + endPrice)

    // Get all the values into priceMap
    var priceMap = {};
    
    for (var i in hourlyValues) {
        priceMap[i] = parseFloat(hourlyValues[i][CLOSE_KEY]);
    }

    return [startHour, startPrice, endHour, endPrice, priceMap];

}

export const stockExists = async (stockName) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=U3NC7OY1RG617V1P`);
    const json = await response.json();

    console.log(stockName + " does " + (json.hasOwnProperty("Time Series (Daily)") ? "" : "NOT ") + "exist!");
    return json.hasOwnProperty("Time Series (Daily)");
}
