// src/components/Payment/PaymentMethod.js
import React from "react";
import { Typography, Radio, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Cartpage/Cartcontext"; 

const { Title } = Typography;

function PaymentMethod() {
  const [method, setMethod] = React.useState("cod");
  const navigate = useNavigate();
  const { clearCart } = useCart(); 

  const handlePayment = () => {
    clearCart(); 
    message.success(
      `✅ Order placed using ${
        method === "cod" ? "Cash on Delivery" : "Online Payment"
      }`
    );
    navigate("/thankyou"); 
  };

  const styles = {
    wrapper: {
      minHeight: "100vh",
      background: "linear-gradient(to right, #fdfcfb, #e2d1c3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    card: {
      maxWidth: "500px",
      width: "100%",
      background: "#fff",
      borderRadius: "20px",
      padding: "40px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease-in-out",
    },
    title: {
      fontSize: "28px",
      color: "#ff6f61",
      marginBottom: "30px",
      fontWeight: "700",
    },
    radioGroup: {
      textAlign: "left",
      marginBottom: "30px",
    },
    radio: {
      display: "block",
      padding: "15px 20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      marginBottom: "15px",
      fontSize: "16px",
      fontWeight: "500",
      background: "#fafafa",
      transition: "all 0.2s",
    },
    activeRadio: {
      borderColor: "#52c41a",
      background: "#e6f7e6",
    },
    confirmBtn: {
      background: "linear-gradient(to right, #52c41a, #91d5ff)",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "16px",
      padding: "12px 0",
      border: "none",
      borderRadius: "8px",
      width: "100%",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: "transform 0.2s ease",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <Title level={3} style={styles.title}>
          💳 Choose Your Payment Method
        </Title>

        <div style={styles.radioGroup}>
          <div
            style={{
              ...styles.radio,
              ...(method === "cod" ? styles.activeRadio : {}),
            }}
            onClick={() => setMethod("cod")}
          >
            <Radio value="cod" checked={method === "cod"}>
              💵 Cash on Delivery
            </Radio>
          </div>
          <div
            style={{
              ...styles.radio,
              ...(method === "online" ? styles.activeRadio : {}),
            }}
            onClick={() => setMethod("online")}
          >
            <Radio value="online" checked={method === "online"}>
              💳 Online Payment
            </Radio>
          </div>
        </div>

        <Button
          type="primary"
          size="large"
          onClick={handlePayment}
          style={styles.confirmBtn}
        >
          ✅ Confirm & Pay
        </Button>
      </div>
    </div>
  );
}

export default PaymentMethod;
