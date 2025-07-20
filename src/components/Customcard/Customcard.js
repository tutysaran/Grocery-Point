import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row, Spin, Rate, message, Button } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { useSearch } from "../Navbar/SearchContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Cartpage/Cartcontext";

const { Meta } = Card;

function CustomCardPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const { searchTerm } = useSearch();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://projectapi-neon.vercel.app/api/products/")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        message.error("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: 100 }}><Spin size="large" /></div>;
  }

  return (
    <div style={{ padding: "30px", background: "#f4f4f4", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", color: "green", fontSize: "32px" }}>🛒 𝔾𝕣𝕠𝕔𝕖𝕣𝕪 ℙ𝕣𝕠𝕕𝕦𝕔𝕥𝕤</h2>
      <Row gutter={[24, 24]}>
        {filteredProducts.map((product, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product._id}>
            <Card
              hoverable
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transform: hoveredCard === index ? "translateY(-5px)" : "none",
                transition: "transform 0.3s ease",
              }}
              cover={
                <img alt={product.name} src={product.images[0]} style={{ height: 200, objectFit: "cover" }} />
              }
              bodyStyle={{ padding: 16 }}
            >
              <Meta
                title={<span style={{ fontSize: 16, fontWeight: "bold" }}><ShoppingOutlined style={{ marginRight: 8 }} />{product.name}</span>}
              />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
                <Rate disabled value={product.rating} style={{ fontSize: 14, color: "#faad14" }} />
                <span style={{ fontWeight: "bold", color: "#1890ff" }}>₹{product.price}</span>
              </div>
              <Button
                type="primary"
                block
                style={{ marginTop: 12, borderRadius: "8px", backgroundColor: "#52c41a" }}
                icon={<ShoppingOutlined />}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CustomCardPage;
