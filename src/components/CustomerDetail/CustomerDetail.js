import React, { useState } from "react";
import { Typography, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function CustomerDetails() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !phone || !location) {
      message.error("Please fill in all the details.");
      return;
    }

   
    message.success("✅ Order placed successfully!");
    navigate("/payment-method"); 
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "12px",
        background: "#fffefc",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Title level={3} style={{ textAlign: "center", color: "#fa541c" }}>
        📋 Customer Details
      </Title>

      <Input
        placeholder="Full Name"
        style={{ marginBottom: "20px", height: "45px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Phone Number"
        style={{ marginBottom: "20px", height: "45px" }}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input.TextArea
        placeholder="Delivery Location"
        rows={4}
        style={{ marginBottom: "20px" }}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <Button
        type="primary"
        block
        size="large"
        onClick={handleSubmit}
        style={{ backgroundColor: "#52c41a" }}
      >
        🚀 Confirm Order
      </Button>
    </div>
  );
}

export default CustomerDetails;
