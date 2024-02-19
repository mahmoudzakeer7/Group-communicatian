// pip chart

var waterData = 80;
var cropData = 100;
var energyData = 100;

new Chart(document.getElementById('pie-chart'), {
    type: 'pie',
    data: {
        labels: ["WATER USAGE", "CROP HEALTH", "ENERGY CONSUPTION"],
        datasets: [{
            backgroundColor: ["#0210F6", "#00F90F",
                "#F90000"
            ],
            data: [waterData, cropData, energyData]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Pie Chart for admin panel'
        },
        reponsive: true
    }
});

// water usage chart

var d1 = 100;
var d2 = 95;
var d3 = 90;
var d4 = 85;
var d5 = 70;
var d6 = 65;
var d7 = 40;

var dataArr = [d1, d2, d3, d4, d5, d6, d7]
var options = {
    chart: {
        height: 280,
        type: "area"
    },
    dataLabels: {
        enabled: true
    },
    title: {
        floating: true,
        offsetX: 300,
        offsetY: 5,
        text: "water usage"
    },
    series: [
        {
            name: "Series 1",
            data: dataArr
        }
    ],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
    xaxis: {
        categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan"
        ]
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

// energy chart

var options = {
    series: [
        {
            name: "Actual",
            data: [
                {
                    x: "day 1",
                    y: 5000,
                    meta: {
                        // "24-30 aug": 23,
                        // "16-23 aug": 20,
                        // "1-7 aug": 15
                    }
                },
                {
                    x: "day 2",
                    y: 4300,
                    meta: {
                        // "24-30 aug": 13,
                        // "16-23 aug": 10,
                        // "1-7 aug": 51
                    }
                },
                {
                    x: "day 3",
                    y: 3200,
                    meta: {
                        // "24-30 aug": 3,
                        // "16-23 aug": 0,
                        // "1-7 aug": 13
                    }
                },
                {
                    x: "day 4",
                    y: 2000,
                    meta: {
                        // "24-30 aug": 2,
                        // "16-23 aug": 2,
                        // "1-7 aug": 1
                    }
                },
                {
                    x: "day 5",
                    y: 1600,
                    meta: {
                        // "24-30 aug": 2,
                        // "16-23 aug": 2,
                        // "1-7 aug": 1
                    }
                },
                {
                    x: "day 6",
                    y: 890,
                    meta: {
                        // "24-30 aug": 2,
                        // "16-23 aug": 2,
                        // "1-7 aug": 1
                    }
                },
                {
                    x: "day 7",
                    y: 500,
                    meta: {
                        // "24-30 aug": 2,
                        // "16-23 aug": 2,
                        // "1-7 aug": 1
                    }
                }
            ]
        }
    ],
    chart: {
        height: 350,
        type: "bar"
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    colors: ["#0ed75e"],

    tooltip: {
        custom: (opts) => {
            const { seriesIndex, dataPointIndex, w } = opts;

            const meta = w.config.series[seriesIndex].data[dataPointIndex].meta;
            return Object.entries(meta)
                .map(([k, v]) => {
                    return `
                <div>
                  ${k} - ${v}  
                </div>
              `;
                })
                .join("");
        }
    },
    title: {
        floating: true,
        offsetX: 300,
        offsetY: 5,
        text: "power consumption in 7 days (kw) "
    },
};

var chart = new ApexCharts(document.querySelector("#chart-energy"), options);
chart.render();