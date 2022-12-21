/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

const users = [
  {
    customer: "Abhisekh",
    Hero: "Arpan",
    service: "Photo",
    location: "delhi",
    date: "12/02/2005",
    amount: "5,000",
    mode: "online",
  },
  {
    customer: "Sharukh",
    Hero: "Gauri",
    service: "Video",
    location: "delhi",
    date: "12/02/2005",
    amount: "45,000",
    mode: "Cash",
  },
  {
    customer: "Krishna",
    Hero: "Raftaar",
    service: "Video",
    location: "delhi",
    date: "12/02/2005",
    amount: "95,000",
    mode: "online",
  },
];

const NotifyLabour = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Booking's
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
            <th> Customer </th>
            <th> Hero </th>
            <th> Service </th>
            <th> Location </th>
            <th> Date </th>
            <th> Category </th>
            <th> Time  </th>
            <th> Payment Method </th>
            <th> Status </th>
            <th> Scheduled </th>
            <th> Ratings </th>
            <th> Wallet </th>
            <th> Clixo Reward </th>
            <th> Clixo Points </th>
            <th>Amount </th>
            <th>Payment Method </th>
          </tr>
        </thead>
        <tbody>
          {users.map((i, index) => (
            <tr key={index}>
              <td> {i.customer} </td>
              <td> {i.Hero} </td>
              <td> {i.service} </td>
              <td> {i.location} </td>
              <td> {i.date} </td>
              <td> Category </td>
              <td> 2: </td>
              <td> {i.amount} </td>
              <td> {i.mode} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default HOC(NotifyLabour);
