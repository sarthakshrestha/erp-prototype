import React, { useState } from "react";
import "../styles/order-form.css";
import CalculatePrice from "./calculate-price";

const paperData = [
  { type: "Coated art paper" },
  { type: "Normal paper type" }
];

const paperThickness = [
  { type: "100 GSM "},
  { type: "200 GSM"}
];

const dimensionData = [
  { label: "A4 - 8.3 x 11.7 inches", value: "a4" },
  { label: "A5 - 5.8 x 8.3 inches", value: "a5"},
  {label: "A6 - 4.1 x 5.8 inches", value: "a6"}
];

const plateData = [
  { label: "A4 - 20 x 30 inches", value: "p1"},
  { label: "A5 - 20 x 30 inches", value: "p1"},
  {label: "A6 - 20 x 30 inches", value: "p1"}
];

const layOut = [
  {label: "Portrait", value: "portrait"},
  {label: "Landscape", value:"landscape"}
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

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Place your logic for form submission here
  };

  return (
    <>
    <div className="form-wrapper">
            <h1 className="order-heading">Place an order through<br></br> <span className="red-text">/</span><span className="blue-text">/</span>Project-P</h1>
      <div className="form-container">
        <div className="input-form">
          <form className="first-column" onSubmit={handleSubmit}>
            <label htmlFor="customer-name">Customer Name</label>
            <input
              type="text"
              id="customer-name"
              name="customer-name"
              required
            />
            <label htmlFor="customer-email">Customer Email</label>
            <input
              type="email"
              id="customer-email"
              name="customer-email"
              required
            />

            <label htmlFor="product-size">Dimensions </label>
            <select
              id="product-size"
              name="productSize"
              value={formData.productSize}
              onChange={handleChange}
              required
            >
              <option value="">Select Size</option>
              {dimensionData.map((item, index) => (
                <option key={index} value={item.value}>{item.label}</option>
              ))}
            </select>
                 
            <div className="row-container">
              <label htmlFor="product-pages">Pages: Number of Pages</label>
              <input
                type="number"
                id="product-pages"
                name="product-pages"
                className="number-field"
                required
              />
              <label htmlFor="product-quantity">Quantity: X Copies</label>
              <input
                type="number"
                id="product-quantity"
                name="product-quantity"
                required
              />
            </div>
            <button className="order-btn" type="submit">
              Place Order
            </button>
          </form>
        </div>
        <div className="row-form">
          <form>
            <label htmlFor="paper-type">Type of Paper</label>
            <select id="paper-type" name="paper-type" onChange={handlePaperChange} required>
              <option value="">Select Paper Type</option>
              {paperData.map((item, index) => (
                <option key={index} value={item.type}>{item.type}</option>
              ))}
            </select>
            <label htmlFor="paper-thickness">Paper Thickness</label>
            <select id="paper-thickness" name="paper-thickness" onChange={handleThicknessChange} required>
              <option value="">Select Paper Thickness</option>
              {paperThickness.map((item, index) => (
                <option key={index} value={item.type}>{item.type}</option>
              ))}
            </select>
          </form>
          
        </div>
        <CalculatePrice/>
      </div>
    </div>
    </>
  );
}
