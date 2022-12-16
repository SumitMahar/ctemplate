function displayChart(klinedata) {
    const chartProperties = {
        width: 1300,
        height: 500,
        // layout: {
        //     backgroundColor: '#2a2e39',
        //     textColor: 'rgba(255, 255, 255, 0.9)'
        // },
        timeScale: {
            timeVisible: true,
            secondsVisible: true,
        },
    };

    const domElement = document.getElementById('tvchart');
    const chart = LightweightCharts.createChart(domElement, chartProperties);
    const candleseries = chart.addCandlestickSeries();
    console.log(klinedata)
    candleseries.setData(klinedata);
};


function getData() {
    var resp;
    var cdata;
    console.log("started");
    document.getElementById('inputfile')
        .addEventListener('change', function () {

            var fr = new FileReader();
            fr.onload = function () {
                resp = fr.result;
                cdata = resp.split('\n').map((row) => {
                    const [time1, time2, open, high, low, close] = row.split(',');
                    return {
                        time: new Date(`${time1}, ${time2}`).getTime() / 1000,
                        open: open * 1,

                        high: high * 1,
                        low: low * 1,
                        close: close * 1,
                    };
                });
                displayChart(cdata);

                // console.log(cdata);
            }

            fr.readAsText(this.files[0]);
        })

    // return;
};

getData();


