
const titleTooltip = (tooltipItems) => {
    return '';
}

Chart.defaults.font.family = "'DM Sans', 'sans-serif'";

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    label: '',
    data: {
        labels: ['mon','tue','wed','thu','fri','sat','sun'],
        datasets: [{
            data: [17.45,34.91,52.36,31.07,23.39,43.28,25.48],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'
            ],
            borderSkipped: false,
            borderRadius: 5,
            barThickness: 33,
            barPercentage: 2,
            hoverBackgroundColor: [
                'hsl(10, 79%, 75%)',
                'hsl(10, 79%, 75%)',
                'hsl(186, 34%, 70%)',
                'hsl(10, 79%, 75%)',
                'hsl(10, 79%, 75%)',
                'hsl(10, 79%, 75%)',
                'hsl(10, 79%, 75%)'
            ]
        }],
    },
    
    options: {
        scales: {
            x: {
                grid: {
                   display: false,
                   drawBorder: false
                }
             },
             y: {
                grid: {
                   display: false,
                   drawBorder: false
                },
                ticks: {
                    display: false
                }
             },
        },

        plugins:{
            legend: {
                    display: false,
            },

            tooltip:{
                yAlign: 'bottom',
                displayColors : false,
                backgroundColor: 'hsl(25, 47%, 15%)',
                caretSize: 0,
                callbacks:{
                    title : titleTooltip,
                    label : function(context){
                        let label = context.dataset.label||'';
                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                        return label;
                    }
                }
            }
        },

        onHover: (event, chartElement) =>{
            event.native.target.style.cursor = chartElement[0] ? 'pointer':'default';
        }
        
      },
});