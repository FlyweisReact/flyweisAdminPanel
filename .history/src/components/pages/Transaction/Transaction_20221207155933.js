import React from 'react'

const Transaction = () => {
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
                  <td> {i.amount} </td>
                  <td> {i.mode} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      );
    };

export default Transaction