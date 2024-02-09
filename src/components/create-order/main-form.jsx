import React from "react";
import "../styles/main-form.css";

export default function MainForm() {
  return (
    <div className="main-form">
      <h1>Create an Order</h1>
      <form>
        <label htmlFor="customer-name">Customer Name</label>
        <input
          type="text"
          id="customer-name"
          name="customer-name"
          required
        ></input>
        <label htmlFor="customer-email">Customer Email</label>
        <input
          type="email"
          id="customer-email"
          name="customer-email"
          required
        ></input>
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          required
        ></input>
        <label htmlFor="product-quantity">Product Quantity</label>
        <input
          type="number"
          id="product-quantity"
          name="product-quantity"
          required
        ></input>
        <label htmlFor="product-price">Product Price</label>
        <input
          type="number"
          id="product-price"
          name="product-price"
          required
        ></input>
        <button className="order-btn" type="submit">Create Order</button>
      </form>
    </div>
  );
}
