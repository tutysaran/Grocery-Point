// src/pages/Offer.js
import React from "react";
import { Card } from "antd";
import {
  FireTwoTone,
  GiftTwoTone,
  StarTwoTone,
  SmileTwoTone,
  CheckCircleTwoTone
} from "@ant-design/icons";

const offers = [
  {
    icon: <GiftTwoTone twoToneColor={["#52c41a", "#237804"]} style={{ fontSize: "30px" }} />,
    title: "Buy 1 Get 1 Free",
    desc: "Select vegetables now come with a special BOGO offer.",
    bg: "#f6ffed"
  },
  {
    icon: <SmileTwoTone twoToneColor={["#389e0d", "#52c41a"]} style={{ fontSize: "30px" }} />,
    title: "10% Off on Dairy",
    desc: "Fresh dairy products with a special discount for today.",
    bg: "#e6fffb"
  },
  {
    icon: <StarTwoTone twoToneColor={["#73d13d", "#237804"]} style={{ fontSize: "30px" }} />,
    title: "₹50 Off on Orders ₹500+",
    desc: "Get flat ₹50 off when your cart value exceeds ₹500.",
    bg: "#f0fff0"
  },
  {
    icon: <FireTwoTone twoToneColor={["#389e0d", "#52c41a"]} style={{ fontSize: "30px" }} />,
    title: "Free Oil Sample",
    desc: "Grab your free edible oil sample with every grocery combo.",
    bg: "#f9fef9"
  }
];

function Offer() {
  return (
    <div
      style={{
        padding: "40px 20px",
        background: "linear-gradient(to bottom, #e6ffe6, #ffffff)",
        minHeight: "100vh"
      }}
    >
      <h1 style={{
        textAlign: "center",
        marginBottom: "30px",
        color: "#52c41a",
        fontSize: "2.5rem",
        fontWeight: "bold",
        textShadow: "1px 1px 2px #d9f7be"
      }}>
        🌿 Today's Green Deals
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {offers.map((offer, index) => (
          <Card
            key={index}
            hoverable
            style={{
              background: offer.bg,
              borderRadius: "18px",
              padding: "20px",
              border: "1px solid #b7eb8f",
              boxShadow: "0 8px 24px rgba(82, 196, 26, 0.15)",
              transition: "transform 0.2s ease-in-out",
            }}
            bodyStyle={{ padding: "0" }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px",
            }}>
              {offer.icon}
              <div>
                <h3 style={{ margin: "0", fontSize: "18px", color: "#237804" }}>{offer.title}</h3>
                <p style={{ margin: "4px 0", color: "#555" }}>{offer.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: "24px" }} />
        <p style={{ fontSize: "16px", color: "#888", marginTop: "10px" }}>
          Hurry up! These offers expire by midnight today. 🍃
        </p>
      </div>
    </div>
  );
}

export default Offer;
