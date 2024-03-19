import React from "react";
import "../styles/job-card.css";

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
    <div>
      <h1 className="title-h">Job Card</h1>
      <section className="container">
        <form action="" className="form">
          <label htmlFor="fullName">Order Date / Time </label>
          <input
            type="date"
            id="order-date"
            name="order-date"
            placeholder="Date"
          />
          <label htmlFor="fullName">Deadline</label>
          <input
            type="date"
            id="daedline-date"
            name="deadline-date"
            placeholder="Date"
          />

          <label htmlFor="email">Job Title</label>
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

          <label htmlFor="aptNumber">Contact Person</label>
          <input
            className="text"
            type="text"
            id="aptNumber"
            name="contact-person"
            placeholder="Contact Person"
          />

          <label htmlFor="firstOption">Service Required</label>
          <select id="firstOption" name="firstOption">
            {options.serviceRequired.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <label htmlFor="deliveryOption">Delivery</label>
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
          <label htmlFor="company">Company</label>
          <input
            className="text"
            type="text"
            id="company"
            name="company-name"
            placeholder="Company"
          />
          <label htmlFor="venue">Venue</label>
          <input
            className="text"
            type="text"
            id="venue"
            name="venue-name"
            placeholder="Venue"
          />
          <label htmlFor="contactName">Contact Person Name</label>
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
        <h2 className="title-h">Pre-press Unit</h2>
        <section className="container">
          <form action="" className="form">
            <label htmlFor="pre-press">Pre-press Unit</label>
            <select id="pre-press1">
              {options.prePress.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <label htmlFor="materialReceived">Material Received</label>
            <select id="materialReceived">
              {options.materialReceived.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <label htmlFor="flapSize">Flap Size</label>
            <select id="flapSize">
              {options.flapSize.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <label htmlFor="ManualflapSize">Manual Flap Size</label>
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
            />
          </form>
        </section>
        
        <br></br>
        <table className="size-tbl">
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
      <section className="container">
        <form>
          <label htmlFor="plateDamage">
            <b>
              <p>Plate Damage</p>
            </b>
          </label>
          <br></br>
          <input
            type="radio"
            id="plateDamageCTP"
            name="plateDamage"
            value="CTP"
          />
          <label for="plateDamageCTP"> On CTP</label>
          <br></br>
          <input
            type="radio"
            id="plateDamagePress"
            name="plateDamage"
            value="Press"
          />
          <label for="plateDamagePress"> On Press</label>
        </form>
        <br></br>
        <label htmlFor="plate-remake">
          <input
            type="text"
            id="plate-remake"
            placeholder="Plate Remake"
          ></input>
        </label>
      </section>
      <section>
        <form>
          <table className="paper-table">
            <thead>
              <tr>
                <th>PAPER UNIT</th>
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
                <th>PAPER UNIT</th>
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
        </form>
      </section>
      <button className="submit" type="submit">
        Submit
      </button>
    </div>
  );
}
