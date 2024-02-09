import{
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js';
  
  import {Doughnut} from 'react-chartjs-2'
  
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
  );


export default function User_DoughnutChat() {

    const data = {
        labels: ['Active', 'New', 'Inactive'],
        datasets: [{
          label: 'poll',
          data: [6, 4, 2],
          backgroundColor: ['#B09FFF', '#FFD572', '#EFEFEF'],
          borderColor: ['#B09FFF', '#FFD572', '#EFEFEF'],
        }] 
      }
    
      const options = {
        aspectRatio: 2.5
      };

    return(
        <div className="UserChart" style={{width: '100%', height: '130%'}}>
            <Doughnut 
              data={data}
              options={options}
            ></Doughnut>
        </div>
    );
}