/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import BarChart from 'react-bar-chart';

const data = [
    {text: 'Man', value: 500}, 
    {text: 'Woman', value: 300} 
  ];

  const margin = {top: 20, right: 20, bottom: 30, left: 40};
 
const Example = React.createClass({
  getInitialState() {
    return { width: 500 };
  },
 
  componentDidMount: () => {
    window.onresize = () => {
     this.setState({width: this.refs.root.offsetWidth}); 
    };
  },
 
  handleBarClick(element, id){ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  },

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
