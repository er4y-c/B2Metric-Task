import { faker } from '@faker-js/faker';

export const cardValues = [
    {
        id:'1',
        title:'Active Users',
        value:'14.592'
    },
    {
        id:'2',
        title:'Sessions',
        value:'16.921'
    },
    {
        id:'3',
        title:'Returned Users',
        value:'4.562'
    },
    {
        id:'4',
        title:'Registered Users',
        value:'649'
    }
]
export const labels = ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18'];

export const chartOptions = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Todays Trends',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

export const data = {
    labels,
    datasets: [
      {
        label: 'Today',
        data: labels.map(() => (faker.datatype.number({ min: 10, max: 100 }))),
        borderColor: 'rgb(55, 81, 255)',
        backgroundColor: 'rgb(55, 81, 255',
        yAxisID: 'y',
      },
      {
        label: 'Yesterday',
        data: labels.map(() => (faker.datatype.number({ min: 10, max: 100 }))),
        borderColor: 'rgb(223, 224, 235)',
        backgroundColor: 'rgb(223, 224, 235)',
        yAxisID: 'y1',
      },
    ],
};