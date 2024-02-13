import React from "react";
import "../styles/job-card.css"

export default function JobCard() {
  return (
    <div>
      <h1>Job Card</h1>
      <section className="container">
        <form action="" className="form">
          <label htmlFor="fullName">Order Date / Time </label>
          <input type="date" id="order-date" name="order-date" placeholder="Date" />
          <label htmlFor="fullName">Deadline</label>
          <input type="date" id="daedline-date" name="deadline-date" placeholder="Date" />

          <label htmlFor="email">Job Title</label>
          <input type="text" id="job-title" name="jobtitle" placeholder="Job Title" />

          <label htmlFor="streetAddress">Company</label>
          <input className="text" type="text" id="streetAddress" name="company-name" placeholder="Street Address" />

          <label htmlFor="aptNumber">Contact Person</label>
          <input className="text" type="text" id="aptNumber" name="contact-person" placeholder="Contact Person" />

          <label htmlFor="firstOption">Service Required</label>
          <select id="firstOption" name="firstOption">
            <option value="pre-press">Pre-press</option>
            <option value="press">Press</option>
            <option value="post-press">Post-press</option>
          </select>

          <label htmlFor="firstOption">Delivery</label>
          <select id="firstOption" name="firstOption">
            <option value="collect-1">to be collected</option>
            <option value="collect-2">to be sent to</option>
          </select><br/>
          <p><i>If to be sent to</i></p>
          <label htmlFor="streetAddress">Company</label>
          <input className="text" type="text" id="company" name="company-name" placeholder="Company" />
          <label htmlFor="streetAddress">Venue</label>
          <input className="text" type="text" id="venue" name="venue-name" placeholder="Venue" />
          <label htmlFor="streetAddress">Contact Person Name</label>
          <input className="text" type="text" id="contact-name" name="contact-name" placeholder="Contact Person Name" />
        </form>
        <h2>Pre-press Unit</h2>
        <section className="container">
            <form action="" className="form">
                <label htmlFor="pre-press">Pre-press Unit</label>
                 <select id="pre-press1">
                    <option value="opt-1">PS/PDF</option>
                    <option value="opt-2">Original Document File</option>
                 </select>

                 <label htmlFor="pre-press">Material Received</label>
                 <select id="service">
                    <option value="service-1">Dummy</option>
                    <option value="service-2">CD/DVD</option>
                    <option value="service-3">Flash-drive</option>
                    <option value="service-4">E-mail</option>
                 </select>
            
                <label htmlFor="imposition">Flap Size</label>
                <select id="imposition">
                    <option value="imposition-1">2</option>
                    <option value="imposition-2">4</option>
                    <option value="imposition-3">6</option>
                    <option value="imposition-4">8</option>
                    <option value="imposition-5">12</option>
                    <option value="imposition-6">16</option>
                </select>
            </form>
        </section>
        
      </section>
      <button className="submit" type="submit">Submit</button>
    </div>
  );
}
