/** @format */

import React , {useState} from "react";
import HOC from "../../layout/HOC";



import { Bar } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';

// import BarChart from "react-bar-chart";

// const data = [
//   { text: "Man", value: 500 },
//   { text: "Woman", value: 300 },
// ];

// const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const Graph = () => {


    const [data] = useState({
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(194, 116, 161, 0.5)',
            borderColor: 'rgb(194, 116, 161)',
            data: [65, 59, 90, 81, 56, 55, 40],
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(71, 225, 167, 0.5)',
            borderColor: 'rgb(71, 225, 167)',
            data: [28, 48, 40, 19, 96, 27, 100],
          },
        ],
      });


  return (
    <section>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <span className="tracking-widest text-slate-900 font-semibold uppercase ">
          Analatics Graph
        </span>
      </div>
<div style={{marginTop : '2%'}}>

<CDBContainer>
      <h3 className="mt-5">Bar chart</h3>
      <Bar data={data} options={{ responsive: true }} />
    </CDBContainer>
{/* <BarChart
        ylabel="Quantity"
        width={900}
        height={500}
        margin={margin}
        data={data}
      /> */}
</div>
    
    </section>
  );
};

export default HOC(Graph);
