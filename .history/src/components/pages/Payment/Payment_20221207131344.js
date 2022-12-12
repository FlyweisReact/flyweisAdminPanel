/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

const users = [
  {
  name : 'Wedding/Pre-wedding' , 
  PG : '4599.91' , 
  VG : '6533.87' , 
  DG : '4578.54'
  },

];

const Payment = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Transactions
          </span>
        </div>
      </section>

      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "2%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th></th>
            <th> PhotoGuy </th>
            <th>VideoGuy </th>
            <th>DroneGuy </th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td> {i.lab} </td>
              <td> {i.cus} </td>
              <td> {i.amount} </td>
              <td> {i.date} </td>
              <td> {i.pay} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Payment);
