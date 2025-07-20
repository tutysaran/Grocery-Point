import React, { useEffect } from "react";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <style>{`
        .thankyou-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 40px;
          background: linear-gradient(to bottom, #e0f7fa, #ffffff);
          text-align: center;
        }

        .thankyou-title {
          color: #52c41a;
          font-size: 36px;
          margin-bottom: 10px;
        }

        .thankyou-message {
          font-size: 20px;
          color: #333;
        }

        .thankyou-subtext {
          margin-top: 20px;
          font-style: italic;
          color: #888;
        }

        /* ✅ Responsive Design */
        @media (max-width: 768px) {
          .thankyou-title {
            font-size: 26px;
          }
          .thankyou-message {
            font-size: 16px;
          }
          .thankyou-subtext {
            font-size: 14px;
            margin-top: 15px;
          }
          .thankyou-container {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .thankyou-title {
            font-size: 22px;
          }
          .thankyou-message {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="thankyou-container">
        <Title level={2} className="thankyou-title">
          🎉 Thank You for Your Order!
        </Title>
        <p className="thankyou-message">We will process your delivery shortly.</p>
        
      </div>
    </>
  );
}

export default ThankYou;
