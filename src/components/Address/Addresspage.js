import React from "react";
import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

function ShopAddress() {
  return (
    <div
      style={{
        padding: "5vw 4vw",
        backgroundColor: "#f6ffed",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "16px",
          boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
          padding: "24px",
          background: "#ffffff",
        }}
      >
        <Title
          level={3}
          style={{
            color: "#237804",
            textAlign: "center",
            fontSize: "clamp(20px, 4vw, 28px)",
            marginBottom: "20px",
          }}
        >
          🏪 𝔾𝕣𝕠𝕔𝕖𝕣𝕪 ℙ𝕠𝕚𝕟𝕥 - 𝕊𝕙𝕠𝕡 𝔸𝕕𝕕𝕣𝕖𝕤𝕤
        </Title>

        <Paragraph
          style={{
            fontSize: "clamp(14px, 2.5vw, 16px)",
            lineHeight: "1.6",
            marginBottom: "16px",
          }}
        >
          <strong>📍 Address:</strong><br />
          No. 45, Main Street,<br />
          Anna Nagar, Chennai - 600040<br />
          Tamil Nadu, India
        </Paragraph>

        <Paragraph
          style={{
            fontSize: "clamp(14px, 2.5vw, 16px)",
            marginBottom: "16px",
          }}
        >
          <strong>📞 Phone:</strong><br />
          +91 98765 43210
        </Paragraph>

        <Paragraph
          style={{
            fontSize: "clamp(14px, 2.5vw, 16px)",
            marginBottom: "16px",
          }}
        >
          <strong>🕒 Working Hours:</strong><br />
          Mon - Sun: 8:00 AM – 9:00 PM
        </Paragraph>

        <div style={{ marginTop: "20px" }}>
          <iframe
            title="shop-location"
            src="https://maps.google.com/maps?q=anna%20nagar%20chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="250"
            style={{
              borderRadius: "12px",
              border: "1px solid #d9d9d9",
              width: "100%",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Card>
    </div>
  );
}

export default ShopAddress;
