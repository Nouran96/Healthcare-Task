function showHead() {
    document.querySelector('#shoulder').style.display = 'none';
    document.querySelector('#head').style.display = 'block';
    document.querySelector('#confirm').style.display = 'block';
}

function showShoulders() {
    document.querySelector('#head').style.display = 'none';
    document.querySelector('#shoulder').style.display = 'block';
    document.querySelector('#confirm').style.display = 'block';
}

// function closeDiagram() {
//     window.history.back();
// }

var ctx = document.getElementById('myChart').getContext('2d');
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["<2 weeks(n=33)", '2–4 weeks(n=36)', '5–8 weeks(n=42)', '9–12 weeks(n=62)', '>12 weeks(n=16)'],
        datasets: [{
            data: [1, 2, 4, 10, 6],
            backgroundColor: [
                'white',
                'white',
                'white',
                'white',
                'white',
            ],
            borderColor: [
                '#23285A',
                '#23285A',
                '#23285A',
                '#23285A',
                '#555658',
            ],
            borderWidth: 15
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 2,
                    suggestedMax: 12
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Odds ratio'
                }
            }]
        },
        responsive: true,
        legend: {
            display: false,
        },
        annotation: {
            annotations: [{
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y-axis-0',
              value: 1,
              borderColor: '#555658',
              borderWidth: 1,
              label: {
                enabled: false,
                content: 'Test label'
              }
            }]
        }
    }
});

// ctx.beginPath();
// canvas_arrow(ctx, 10, 30, 200, 150);
// canvas_arrow(ctx, 100, 200, 400, 50);
// canvas_arrow(ctx, 200, 30, 10, 150);
// canvas_arrow(ctx, 400, 200, 100, 50);
// ctx.stroke();

// function canvas_arrow(context, fromx, fromy, tox, toy) {
//   var headlen = 10; // length of head in pixels
//   var dx = tox - fromx;
//   var dy = toy - fromy;
//   var angle = Math.atan2(dy, dx);
//   context.moveTo(fromx, fromy);
//   context.lineTo(tox, toy);
//   context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
//   context.moveTo(tox, toy);
//   context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
// }