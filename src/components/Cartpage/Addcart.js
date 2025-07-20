import React from "react";
import { useCart } from "../Cartpage/Cartcontext";
import { Typography, Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function Addcart() {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    navigate("/customer-details");
  };

  return (
    <>
      <style>{`
        .cart-container {
          padding: 40px;
          background: linear-gradient(to right, #fff7e6, #ffe6e6);
          min-height: 100vh;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          margin: 20px auto;
          max-width: 1100px;
        }

        .cart-title {
          text-align: center;
          color: #ff5722;
          font-weight: bold;
          margin-bottom: 40px;
          font-size: 30px;
        }

        .cart-card {
          background: #fff;
          border-radius: 14px;
          padding: 20px;
          display: flex;
          gap: 20px;
          align-items: center;
          box-shadow: 0 6px 15px rgba(0,0,0,0.05);
          margin-bottom: 20px;
        }

        .cart-image {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 12px;
        }

        .cart-info {
          flex: 1;
        }

        .cart-name {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .cart-category {
          font-size: 15px;
          color: #666;
        }

        .cart-price {
          margin-top: 8px;
          font-size: 16px;
        }

        .cart-total {
          color: green;
          font-weight: bold;
        }

        .btn-group {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        .btn-base {
          padding: 6px 14px;
          font-size: 14px;
          font-weight: bold;
          border-radius: 6px;
          border: none;
          cursor: pointer;
        }

        .btn-add {
          background: #28a745;
          color: #fff;
        }

        .btn-remove {
          background: #ff4d4f;
          color: #fff;
        }

        .cart-summary {
          background: #fff;
          border-radius: 14px;
          padding: 30px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.05);
          margin-top: 40px;
          text-align: center;
        }

        .cart-summary-text {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .btn-checkout {
          background: linear-gradient(to right, #ff758c, #ff7eb3);
          color: #fff;
          font-weight: bold;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          padding: 10px 25px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          margin-top: 20px;
        }

       

        @media (max-width: 768px) {
          .cart-container {
            padding: 20px 10px;
          }
          .cart-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .cart-image {
            width: 100%;
            height: auto;
          }
          .cart-title {
            font-size: 22px;
          }
          .cart-summary-text {
            font-size: 16px;
          }
          .btn-checkout {
            font-size: 14px;
            width: 100%;
          }
        }
      `}</style>

      <div className="cart-container">
        <Title level={2} className="cart-title">🍽️ Your Delicious Cart</Title>
        <Divider />
        {cartItems.length === 0 ? (
          <Text style={{ fontSize: "18px", color: "#888" }}>
            Your cart is empty.
          </Text>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item._id} className="cart-card">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="cart-image"
                />
                <div className="cart-info">
                  <div className="cart-name">{item.name}</div>
                  <div className="cart-category">📦 Category: {item.category}</div>
                  <div className="cart-price">
                    💰 ₹{item.price} × {item.qty} ={" "}
                    <span className="cart-total">
                      ₹{(item.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                  <div className="btn-group">
                    <button
                      className="btn-base btn-add"
                      onClick={() => addToCart(item)}
                    >
                      ➕ Add
                    </button>
                    <button
                      className="btn-base btn-remove"
                      onClick={() => removeFromCart(item._id)}
                    >
                      ➖ Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="cart-summary">
              <div className="cart-summary-text">🧾 Total Items: {cartItems.length}</div>
              <div className="cart-summary-text">
                💰 Total Price:{" "}
                <strong style={{ color: "#f60" }}>₹{total.toFixed(2)}</strong>
              </div>
              <Button
                className="btn-checkout"
                size="large"
                onClick={handleCheckout}
              >
                ✅ Place Order ₹{total.toFixed(2)}
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Addcart;
