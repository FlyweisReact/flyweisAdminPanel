/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Chart from 'react-apexcharts'

// import BarChart from "react-bar-chart";

// const data = [
//   { text: "Man", value: 500 },
//   { text: "Woman", value: 300 },
// ];

// const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const Graph = () => {
  return (
    <section>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <span className="tracking-widest text-slate-900 font-semibold uppercase ">
          Analatics Graph
        </span>
      </div>
<div style={{marginTop : '2%'}}>
{/* <BarChart
        ylabel="Quantity"
        width={900}
        height={500}
        margin={margin}
        data={data}
      /> */}


<Chart  
type=""
>

</Chart>

</div>
    
    </section>
  );
};

export default HOC(Graph);
