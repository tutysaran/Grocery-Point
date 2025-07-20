import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Spin, Rate, Button, message } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { useCart } from "../Cartpage/Cartcontext"; 
import { useSearch } from "../Navbar/SearchContext"; // 👈 import search context

const { Meta } = Card;

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { addToCart } = useCart(); 
  const { searchTerm } = useSearch(); // 👈 get searchTerm

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://projectapi-neon.vercel.app/api/products")
      .then((res) => {
        const filtered = res.data.filter(
          (item) =>
            item.category.trim().toLowerCase() === category.trim().toLowerCase()
        );
        setProducts(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <Spin size="large" style={{ display: "block", margin: "100px auto" }} />;
  }

  return (
    <div style={{ padding: "30px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <h2 style={{
        textAlign: "center",
        color: "green",
        fontWeight: "bold",
        marginBottom: "30px",
        fontSize: "30px",
      }}>
        🛒 {category.toUpperCase()} PRODUCTS
      </h2>

      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center", color: "red", fontSize: "18px" }}>
          No products found for this search in the selected category.
        </p>
      ) : (
        <Row gutter={[24, 24]}>
          {filteredProducts.map((product, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={product._id}>
              <Card
                hoverable
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  transform: hoveredIndex === index ? "translateY(-5px)" : "none",
                  transition: "transform 0.3s ease",
                }}
                cover={
                  <img
                    alt={product.name}
                    src={product.images[0]}
                    style={{
                      height: 200,
                      width: "100%",
                      objectFit: "cover",
                      borderBottom: "1px solid #f0f0f0",
                    }}
                  />
                }
                bodyStyle={{ padding: 16 }}
              >
                <Meta
                  title={
                    <span style={{ fontWeight: "bold", fontSize: 16 }}>
                      <ShoppingOutlined style={{ marginRight: 8 }} />
                      {product.name}
                    </span>
                  }
                />
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 12,
                }}>
                  <Rate disabled value={product.rating} style={{ fontSize: 14, color: "#faad14" }} />
                  <span
                    style={{
                      fontWeight: "bold",
                      color: hoveredIndex === index ? "#0050b3" : "#1890ff",
                      transition: "color 0.3s ease",
                    }}
                  >
                    ₹{product.price}
                  </span>
                </div>

                <Button
                  block
                  type="primary"
                  icon={<ShoppingOutlined />}
                  onClick={() => {
                    addToCart(product);
                    message.success(`${product.name} added to cart!`);
                  }}
                  style={{
                    marginTop: 12,
                    borderRadius: "8px",
                    backgroundColor: "#52c41a",
                    borderColor: "#52c41a",
                  }}
                >
                  Add to Cart
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default CategoryPage;
