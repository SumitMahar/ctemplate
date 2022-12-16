const chartProperties = {
    width: 1300,
    height: 500,
    timeScale: {
        timeVisible: true,
        secondsVisible: false,
    }
}

const chartDiv = document.querySelector("#chart1")
const chart = LightweightCharts.createChart(chartDiv, chartProperties)
const candleSeries = chart.addCandlestickSeries()

fetch("https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=500")
    .then(res => res.json())
    .then(data => {
        const cdata = data.map(d => {
            return { time: d[0] / 1000, open: parseFloat(d[1]), high: parseFloat(d[2]), low: parseFloat(d[3]), close: parseFloat(d[4]) }
        })
        candleSeries.setData(cdata)
    })
    .catch(err => console.error(err))