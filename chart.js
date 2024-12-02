const ctx = document.getElementById('barChart');

new Chart(
ct, {
    type: 'bar',
    data: {
        lables: ['Red', 'Blue', 'Yellow'],
        datasets: [
        {
            label: "Votes",
            data: [12, 19, 3],
            backgroungColor: ['red', 'blue', 'yellow']
        }
    ]
    }
}
)//test