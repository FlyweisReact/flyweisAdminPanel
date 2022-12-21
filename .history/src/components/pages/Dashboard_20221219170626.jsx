/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const dash = (data) => {
  return data;
};
const Dashboard = () => {
  const card = [
    {
      progress: "bg-green-400",
      title: "Total Users",
      number: "100",
      icon: <FaUserFriends className="text-2xl text-[rgb(241,147,48)]" />,
      link: "/customer",
    },
    {
      progress: "bg-yellow-400",
      title: "Total Heros",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
      link: "/generateId",
    },
    {
      progress: "bg-yellow-400",
      title: "Ongoing tast",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
      link: "/Notice/Labour",
    },
  ];

  const smallCards = [
    {
      progress: "bg-green-400",
      title: "Total Users",
      number: "100",
      icon: <FaUserFriends className="text-2xl text-[#19ac5e]" />,
      link: "/customer",
    },
    {
      progress: "bg-yellow-400",
      title: "Total Cities",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(170,93,225)]" />
      ),
      link: "/generateId",
    },
    {
      progress: "bg-yellow-400",
      title: "Ongoing tast",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(67,136,232)]" />
      ),
      link: "/Notice/Labour",
    },
    {
      progress: "bg-green-400",
      title: "Total Users",
      number: "100",
      icon: <FaUserFriends className="text-2xl text-[rgb(244,169,52)]" />,
      link: "/customer",
    },
    {
      progress: "bg-yellow-400",
      title: "Total Heros",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(237,77,77)]" />
      ),
      link: "/generateId",
    },
    {
      progress: "bg-yellow-400",
      title: "Ongoing tast",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
      link: "/Notice/Labour",
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8 bg-slate-200 space-y-2 shadow-xl flex flex-col  rounded-md"
              key={index}
              onClick={() => navigate(`${card.link}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span className="tracking-widest text-gray-900">
                    {card.title}
                  </span>
                  <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold">
                    {card.number}
                  </span>
                </div>
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <br />
      <br />
      <br />
      <section className="grid md:grid-cols-5 grid-cols-2 gap-y-6 gap-x-4">
        {smallCards.map((card, index) => {
          return (
            <div className="px-3 py-2 space-y-2 shadow-xl flex flex-col  rounded-md">
            <div style={{
              display : 'flex' 
              ,
              justifyContent : 'space-between'
            }}>
              <div>
                {card.icon}
              </div>
              <div style={{color : 'black' , textAlign : 'right'}}>
              <span> 
              {card.number}
              </span>
                <p>{card.title} </p>
              </div>
            </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);
