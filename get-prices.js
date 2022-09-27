const fs = require("fs");
const path = require("path");

const dataFileArg = process.argv[2];

if (!dataFileArg) {
  throw new Error("Data file argument not provided");
}

const dataFilePath = path.join(__dirname, dataFileArg);

console.log(`Reading ${dataFileArg}`);

const data = JSON.parse(fs.readFileSync(dataFilePath));

const rawPrices = data.map(item => item.find(e => e.indexOf("€/mesec") !== -1)).filter(priceItems => priceItems && priceItems.length > 0);
const prices = rawPrices.map(raw => parseInt(raw.split(",")[0].replace(/\./g, "")));

const sum = prices.reduce((sum, current) => sum + current, 0);
const mean = sum / prices.length;

console.log("MEAN:", mean);

fs.writeFileSync(path.join(__dirname, "out.json"), JSON.stringify(prices, null, 4))