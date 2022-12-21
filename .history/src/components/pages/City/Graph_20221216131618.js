/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import BarChart from 'react-bar-chart';

const data = [
    {text: 'Man', value: 500}, 
    {text: 'Woman', value: 300} 
  ];

const Graph = () => {
  return (
    <section>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <span className="tracking-widest text-slate-900 font-semibold uppercase ">
          Analatics Graph
        </span>
      </div>
   
    </section>
  );
};

export default HOC(Graph);
