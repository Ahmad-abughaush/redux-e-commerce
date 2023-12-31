import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id} style={{ marginBottom: "20px" }}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards" style={{ height: "500px" }}>
            <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <div className="image" style={{ flex: 1, height: "300px", width: "100%" }}>
                <img src={image} alt={title} style={{ objectFit: "cover", height: "100%", width: "100%" }} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="ui four column grid">{renderList}</div>;
};

export default ProductComponent;
