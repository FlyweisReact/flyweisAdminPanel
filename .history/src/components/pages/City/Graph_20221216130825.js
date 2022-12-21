/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import {Bar} from 'react-chartjs-2'

const Graph = () => {
  return (
    <section>
      <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
        <span className="tracking-widest text-slate-900 font-semibold uppercase ">
          Analatics Graph
        </span>
      </div>
      <Bar
      data={{
        labels : ['1st Bar' , '2nd Bar']
      }}
       />
    </section>
  );
};

export default HOC(Graph);
