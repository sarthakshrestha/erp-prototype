import React, { useState } from "react";
import "../styles/job-card.css";

const JobCard = () => {
  const [orderDateTime, setOrderDateTime] = useState("");
  const [deadline, setDeadline] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleFormSubmit} className="job-card-form">
      <h1>JobCard</h1>
      <div className="job-card-column">
        <label>
          Order/Date Time:
          <input
            type="text"
            value={orderDateTime}
            onChange={(e) => setOrderDateTime(e.target.value)}
            className="job-card-input"
          />
        </label>
        <label>
          Deadline:
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="job-card-input"
          />
        </label>
        <br />
        <label>
          Job Title:
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="job-card-input"
          />
        </label>
        <br />
      </div>
      <div className="job-card-column">
        <label>
          Company:
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="job-card-input"
          />
        </label>
        <br />
        <label>
          Contact Person:
          <input
            type="text"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
            className="job-card-input"
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="job-card-input"
          />
        </label>
        <br />
        <label>
          Payment:
          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="job-card-select"
          >
            <option value="">Select Payment Option</option>
            <option value="advance">Advance</option>
            <option value="onDelivery">On Delivery</option>
            <option value="credit">Credit</option>
          </select>
        </label>
        <br />
      </div>
      <button type="submit" className="job-card-button">
        Submit
      </button>
    </form>
  );
};

export default JobCard;
