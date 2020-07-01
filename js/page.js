let ctx = document.getElementById("monthlySales").getContext('2d');
let piectx = document.getElementById("deptSales").getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');

//create an array from a list of arguments
let monthlySales = Array.of(12250, 9780, 3504, 5342);
let monthlyLabels = Array.of('Oct', 'Nov', 'Dec');
let deptSales = Array.of(1200, 9000, 30000);
let deptLabels = Array.of('Hiking', 'Running', 'Swimming');

//get yearly total
let yearlyTotal = 0;

function addYearlyTotal(x) {
    yearlyTotal += x;
}

monthlySales.forEach(addYearlyTotal);

//find sale over $1000
function findOver1000() {
    let first1000 = monthlySales.find(elem => elem > 1000);
    //do something
}

function reset() {
    monthlySales.fill(0);
    monthlySalesChart.update();
}

yearlyLabel.innerHTML = `$${yearlyTotal}`;


var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        //x-axis
        labels: monthlyLabels,
        datasets: [{
            ///label for y-axis
            label: '# of Sales',
            data: monthlySales,
            backgroundColor: [
                'rgba(238,184, 104, 1)',
                'rgba(75,166,223,1)',
                'rgba(239,118,122,1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var deptSalesChart = new Chart(piectx, {
    type: 'pie',
    data: {
        //x-axis
        labels: deptLabels,
        datasets: [{
            ///label for y-axis
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238,184, 104, 1)',
                'rgba(75,166,223,1)',
                'rgba(239,118,122,1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


