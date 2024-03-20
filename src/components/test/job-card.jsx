import React from "react";
import "../styles/job-card.css";
import Gap from "../resuable-comps/gap";

const options = {
  serviceRequired: [
    { value: "pre-press", label: "Pre-press" },
    { value: "press", label: "Press" },
    { value: "post-press", label: "Post-press" },
  ],
  deliveryOptions: [
    { value: "collect-1", label: "To be collected" },
    { value: "collect-2", label: "To be sent to" },
  ],
  prePress: [
    { value: "opt-1", label: "PS/PDF" },
    { value: "opt-2", label: "Original Document File" },
  ],
  materialReceived: [
    { value: "service-1", label: "Dummy" },
    { value: "service-2", label: "CD/DVD" },
    { value: "service-3", label: "Flash-drive" },
    { value: "service-4", label: "E-mail" },
  ],
  flapSize: [
    { value: "imposition-1", label: "2" },
    { value: "imposition-2", label: "4" },
    { value: "imposition-3", label: "6" },
    { value: "imposition-4", label: "8" },
    { value: "imposition-5", label: "12" },
    { value: "imposition-6", label: "16" },
  ],
};

export default function JobCard() {
  return (
    <div className="job-container">
      <div className="hero">
        <h1>Job Card</h1>
      </div>
      <div className="job-f-container">
        <div className="left-side">
          <section className="container">
            <Gap />

            <Gap />

            <form action="" className="form">
              <label htmlFor="fullName"><b>Order </b>Date / <b>Time</b> </label>
              <input
                type="date"
                id="order-date"
                name="order-date"
                placeholder="Date"
              />
              <label htmlFor="fullName"><b>Deadline</b></label>
              <input
                type="date"
                id="daedline-date"
                name="deadline-date"
                placeholder="Date"
              />

              <label htmlFor="email"><b>Job</b> Title</label>
              <input
                type="text"
                id="job-title"
                name="jobtitle"
                placeholder="Job Title"
              />

              <label htmlFor="streetAddress">Company</label>
              <input
                className="text"
                type="text"
                id="streetAddress"
                name="company-name"
                placeholder="Street Address"
              />

              <label htmlFor="aptNumber"><b>Contact</b> Person</label>
              <input
                className="text"
                type="text"
                id="aptNumber"
                name="contact-person"
                placeholder="Contact Person"
              />

              <label htmlFor="firstOption"><b>Service </b>Required</label>
              <select id="firstOption" name="firstOption">
                {options.serviceRequired.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <label htmlFor="deliveryOption"><b>Delivery</b></label>
              <select id="deliveryOption" name="deliveryOption">
                {options.deliveryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <br />
              <p>
                <i>If to be sent to</i>
              </p>
              <label htmlFor="company"><b>Company</b></label>
              <input
                className="text"
                type="text"
                id="company"
                name="company-name"
                placeholder="Company"
              />
              <label htmlFor="venue"><b>Venue</b></label>
              <input
                className="text"
                type="text"
                id="venue"
                name="venue-name"
                placeholder="Venue"
              />
              <label htmlFor="contactName"><b>Contact Person</b> Name</label>
              <input
                className="text"
                type="text"
                id="contactName"
                name="contact-name"
                placeholder="Contact Person Name"
              />
            </form>
            <br></br>
            <br></br>
            <h2 className="title-h"><b>Pre-press</b> Unit</h2>
            <section className="container">
              <form action="" className="form">
                <label htmlFor="pre-press"><b>Pre-press</b> Unit</label>
                <select id="pre-press1">
                  {options.prePress.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <label htmlFor="materialReceived"><b>Material</b> Received</label>
                <select id="materialReceived">
                  {options.materialReceived.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <label htmlFor="flapSize"><b>Flap</b> Size</label>
                <select id="flapSize">
                  {options.flapSize.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <label htmlFor="ManualflapSize"><b>Manual</b> Flap Size</label>
                <input
                  type="text"
                  id="ManualflapSize"
                  name="ManualflapSize"
                  placeholder="Other"
                />

                <input
                  type="text"
                  id="paperSize"
                  name="paperSize"
                  placeholder="Paper Size"
                />
                <input
                  type="text"
                  id="gutterSize"
                  name="gutterSize"
                  placeholder="Gutter Size"
                />
                <input
                  type="text"
                  id="gripSize"
                  name="gripSize"
                  placeholder="Gripper Size"
                />
                <input
                  type="text"
                  id="coverPaperSize"
                  name="coverPaperSize"
                  placeholder="Cover Paper Size"
                />
                <input
                  type="text"
                  id="innerPaperSize"
                  name="innerPaperSize"
                  placeholder="Inner Paper Size"
                />

                <label htmlFor="folderName" />
                <p>
                  <b>Folder</b> Name
                </p>
                <input
                  type="text"
                  id="folderName"
                  name="folderName"
                  placeholder="Folder Name"
                />
                <br></br>

                <label htmlFor="plateProcess" />
                <p>
                  <b>Plate</b> Process
                </p>
                <input
                  type="text"
                  id="plateProcess"
                  name="plateProcess"
                  placeholder="Plate Process"
                />
                <br></br>

                <label htmlFor="plateScreentype" />
                <p>
                  <b>Plate</b> Screen Type
                </p>
                <input
                  type="text"
                  id="plateScreentype"
                  name="plateScreentype"
                  placeholder="Plate Screen Type"
                /><Gap/>
              </form>
              <Gap />
              <label htmlFor="plateDamage">
                <b>
                  <h2 className="s-1"><b>Plate</b> Damage</h2>
                </b>
              </label>
              <br></br>
              <input
                type="radio"
                id="plateDamageCTP"
                name="plateDamage"
                value="CTP"
              />
              <label htmlFor="plateDamageCTP"> On CTP</label>
              <br></br>
              <input
                type="radio"
                id="plateDamagePress"
                name="plateDamage"
                value="Press"
              />
              <label htmlFor="plateDamagePress"> On Press</label>
              <Gap />

              <label htmlFor="plate-remake">
                <input
                  type="text"
                  id="plate-remake"
                  placeholder="Plate Remake"
                ></input>
              </label>
            </section>

            <br></br>
            <table className="paper-table">
              <tr>
                <th>Size</th>
                <th>1 color</th>
                <th>2 color</th>
                <th>3 color</th>
                <th>4 color</th>
                <th>Special</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </table>
          </section>
          <h3>Paper Unit</h3>
          <section className="container">
            <table className="paper-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Full Sheet Size</th>
                  <th>Weight</th>
                  <th>Paper type</th>
                  <th>Total Sheets</th>
                  <th>Wastage</th>
                  <th>Total Cut Sheet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cover Paper</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Inner Paper</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Other Paper</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
            <br></br>
            <table className="paper-table-1">
              <thead>
                <tr>
                  <th></th>
                  <th>Cut Sheet Size</th>
                  <th>Wastage</th>
                  <th>Total Cut Sheet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cover Paper</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Inner Paper</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>

                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Other Paper</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
            <Gap />
            <div className="r-form">
              <label htmlFor="type">Paper Ready By</label>
              <Gap />
              <input type="text" id="type" name="type" placeholder="Type" />
              <Gap />
              <label htmlFor="type">Date</label>
              <Gap />
              <input type="date" id="type" name="type" placeholder="Type" />
              <Gap />
              <label htmlFor="time">Time</label>
              <Gap />
              <input type="text" id="type" name="type" placeholder="Time" />
              <Gap />
            </div>
            <form></form>
            <br></br>
          </section>
        </div>
        <div className="right-side">
          <section className="right-container">
            <div className="r-form">
              <label htmlFor="type">Type</label>
              <Gap />
              <input type="text" id="type" name="type" placeholder="Type" />
              <Gap />
              <label htmlFor="size">Size</label>
              <Gap />
              <input type="text" id="size" name="size" placeholder="Size" />
              <Gap />
              <label htmlFor="number-page">No. of Page</label>
              <Gap />
              <input
                type="number"
                id="number-page"
                name="number-page"
                placeholder="Number of Pages"
              />
            </div>
          </section>
          <Gap />
          <section className="right-container">
            <div className="r-form">
              <label htmlFor="type">Print Run</label>
              <Gap />
              <input type="text" id="type" name="type" placeholder="Type" />
              <label>
                <input type="radio" name="side" value="single" /> Single Side
              </label>
              <Gap />
              <label>
                <input type="radio" name="side" value="both" /> Both Sides
              </label>
              <Gap />
            </div>
          </section>
          <section className="container">
            <table className="paper-table-1">
              <thead>
                <tr>
                  <th> </th>
                  <th>Type</th>
                  <th>gsm</th>
                  <th>Print Color</th>
                  <th>Lamination</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Paper</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Cover Paper</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Inner Paper</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Other Paper</td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="container">
            <h3>Bindery</h3>
            <Gap />
            <div className="bindery-container">
              <Gap />
              <Gap />
              <label>
                <input type="radio" name="side" value="centerStitch" /> Center
                Stitch
              </label>
              <Gap />
              <label>
                <input type="radio" name="side" value="perfect" /> Perfect
              </label>
              <Gap />
              <label>
                <input type="radio" name="side" value="juju" /> Juju
              </label>
              <Gap />
              <label>
                <input type="radio" name="side" value="metalFoiling" /> Metal
                Foiling
              </label>
              <Gap />
              
            </div>
            <div className="bindery-container">
            <label>
                <input type="radio" name="side" value="metalFoiling" />{" "}
                Diecuting
              </label><br></br>
              <label>
                <input type="radio" name="side" value="centerStitch" /> Perforation
              </label>
              
              
              <label>
                <input type="radio" name="side" value="padding" /> Padding
              </label>
              <Gap />
              <label>
                <input type="radio" name="side" value="padding" /> Spot
                Varnishing
              </label>
              <Gap />
              
            </div>
            <div className="v-form">
              <label htmlFor="type">Filled In By</label>
              <Gap />
              <input
                type="text"
                id="type"
                name="type"
                placeholder="Filled In By"
              />
              <Gap />
              <label htmlFor="type">Approved By</label>
              <Gap />
              <input
                type="text"
                id="type"
                name="type"
                placeholder="Approved By"
              />
            </div>
          </section>
          <div className="r-form">
            <h3>Press Unit</h3>
            <Gap />
            <input type="text" id="type" name="type" placeholder="Total Set" />
            <Gap />
          </div>
          <Gap />
          <Gap />
          <div className="bindery-container-last">
            <Gap />
          </div>
          <input type="text" id="type" name="type" placeholder="Forma" />
          <Gap />
          <input type="text" id="type" name="type" placeholder="Work & Turn" />
          <Gap /> <Gap />
          <table className="paper-table">
            <thead>
              <tr>
                <th>Paper Type</th>
                <th>Size</th>
                <th>Signature</th>
                <th>Impressions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <div>
                    <span>Ordered:</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Produced:</span>
                    <input type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <div>
                    <span>Ordered:</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Produced:</span>
                    <input type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <div>
                    <span>Ordered:</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Produced:</span>
                    <input type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <div>
                    <span>Ordered:</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Produced:</span>
                    <input type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <div>
                    <span>Ordered:</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Produced:</span>
                    <input type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <div>
                    <span>Ordered:</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Produced:</span>
                    <input type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <div>
                    <span>Ordered:</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Produced:</span>
                    <input type="text" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <div>
                    <span>Ordered:</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>Produced:</span>
                    <input type="text" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </div>
  );
}
