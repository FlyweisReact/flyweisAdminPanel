/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { useNavigate } from "react-router-dom";
import img from "../SVG/home.svg";

export const dash = (data) => {
  return data;
};

const Dashboard = () => {
  const card = [
    {
      title: "Total Customer's",
      number: "150",
      icon: <i className="fa-solid fa-user text-2xl text-[#4099ff]"></i>,
      link: "/customer",
      bg: "#4099ff",
    },
    {
      title: "Total Sales's Members",
      number: "40",
      icon: <i className="fa-solid fa-user text-2xl text-[#5b63d9]"></i>,
      link: "/sales",
      bg: "#5b63d9",
    },
  ];

  <i class="fa-solid fa-user-tie"></i>
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", gap: "20px", marginBottom: "2%" }}>
        <img
          src={img}
          alt=""
          style={{
            backgroundColor: "#4099ff",
            padding: "8px",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        />
        <p style={{ color: "black", fontSize: "18px", margin: "0" }}>
          Dashboard
        </p>
      </div>

      <section className="grid md:grid-cols-4 grid-cols-2 gap-y-6 gap-x-4">
        {card.map((card, index) => {
          return (
            <div
              className="px-5 py-8   shadow-xl   BigOuter"
              key={index}
              onClick={() => navigate(`${card.link ? card.link : "#"}`)}
              style={{ backgroundColor: `${card.bg}` }}
            >
              <div className="Item">
                <div className="left">
                  <span style={{ color: "white", fontSize: "20px" }}>
                    {card.title}
                  </span>
                  <br />
                  <span
                    style={{
                      color: "white",
                      fontSize: "25px",
                      fontWeight: "600",
                    }}
                  >
                    {card.number}
                  </span>
                </div>

                <div className="right">
                  <div className="myICons">
                    {card.img ? <img src={card.img} alt="" /> : card.icon}
                  </div>
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
