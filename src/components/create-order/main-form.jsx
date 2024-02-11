import React from "react";
import "../styles/order-form.css";
import { useState } from "react";

const paperData = [
  { type: "Coated art paper" },
  { type: "Normal paper type" }
];
const lengthData = [
  { label: "5 inches", value: "Length" },
];

const breadthData = [
  { label: "10 inches", value: "Length" },
];


export default function MainForm() {
  const [selectedPaper, setSelectedPaper] = useState("");
  const [selectedThickness, setSelectedThickness] = useState("");

  // Handle change in Type of Paper
  const handlePaperChange = (event) => {
    setSelectedPaper(event.target.value);
  };

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    productName: "",
    productQuantity: "",
    productPrice: "",
    productSize: "",
    productPages: ""
  });

  // Handle form input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle change in Thickness of paper
  const handleThicknessChange = (event) => {
    setSelectedThickness(event.target.value);
  };

  return (
    <div className="main-form">
      <h1>Place an Order</h1>
      <div className="input-form">
        <form>
          {/* Existing fields */}
          <label htmlFor="customer-name">Customer Name</label>
          <input
            type="text"
            id="customer-name"
            name="customer-name"
            required
          />
          <label htmlFor="customer-name">Customer Email</label>
          <input
            type="email"
            id="customer-email"
            name="customer-email"
            required
          />
          <label htmlFor="product-size">Size: Length </label>
          <select
            id="product-size"
            name="productSize"
            value={formData.productSize}
            onChange={handleChange}
            required
          >
            <option value="">Select Size</option>
            {lengthData.map((item, index) => (
              <option key={index} value={item.value}>{item.label}</option>
            ))}
          </select>
          <label htmlFor="product-size">Size: Breadth </label>
          <select
            id="product-size"
            name="productSize"
            value={formData.productSize}
            onChange={handleChange}
            required
          >
            <option value="">Select Size</option>
            {breadthData.map((item, index) => (
              <option key={index} value={item.value}>{item.label}</option>
            ))}
          </select>



          <label htmlFor="product-pages">Pages: Number of Pages</label>
          <input
            type="number"
            id="product-pages"
            name="product-pages"
            required
          />
          <label htmlFor="product-quantity">Quantity: X Copies</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            required
          />
          <label htmlFor="paper-type">Type of Paper</label>
          <select id="paper-type" name="paper-type" onChange={handlePaperChange} required>
            <option value="">Select Paper Type</option>
            {paperData.map((item, index) => (
              <option key={index} value={item.type}>{item.type}</option>
            ))}
          </select>
          
          <button className="order-btn" type="submit">
            Create Order
          </button>
        </form>
      </div>
    </div>
  );
}