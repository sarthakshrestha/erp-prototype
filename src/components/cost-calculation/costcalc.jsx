import React, { useState } from "react";

import "../styles/cost-calc.css";

const CostCalculation = () => {
  const [paperSize, setPaperSize] = useState("");
  const [plateSize, setPlateSize] = useState("");
  const [plateCost, setPlateCost] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [pages, setPages] = useState(0);
  const [otherField, setOtherField] = useState("");

  const sizesAndCosts = [
    { paperSize: "A3", plateSize: "20x30", plateCost: 40 },
    { paperSize: "A4", plateSize: "18x24", plateCost: 15 },
    { paperSize: "A5", plateSize: "18x24", plateCost: 20 },
  ];

  const handlePaperSizeChange = (e) => {
    const selectedSize = e.target.value;
    setPaperSize(selectedSize);

    const selectedSizeData = sizesAndCosts.find(
      (data) => data.paperSize === selectedSize
    );
    if (selectedSizeData) {
      setPlateSize(selectedSizeData.plateSize);
      setPlateCost(selectedSizeData.plateCost);
      setPaperSize(selectedSizeData.paperSize);
    }
  };

  const paperType = [
    {
      paperType: "Glossy",
      paperCost: 100,
    },
    {
      paperType: "Art-style",
      paperCost: 100,
    },
    {
      paperType: "Glossy",
      paperCost: 100,
    },
  ];

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };

  function totalPages(quantity, pages) {
    return Math.round(quantity * pages);
  }

  function totalSheets(quantity, pages) {
    return totalPages(quantity, pages) / 16;
  }

  function totalReams(pages, quantity) {
    return Math.round((pages * quantity) / 16 / 500);
  }

  function innerCost(quantity, pages) {
    return totalReams(pages, quantity) * 4900;
  }

  function totalPacket(quantity) {
    return Math.ceil(totalSheets(quantity, 4) / 100);
  }

  function platePrice(quantity, pages) {
    return pages * 400;
  }

  const handlePagesChange = (e) => {
    const value = parseInt(e.target.value);
    setPages(value);
  };

  const handlePlateSizeChange = (e) => {
    const selectedSize = e.target.value;
    setPlateSize(selectedSize);

    const selectedSizeData = sizesAndCosts.find(
      (data) => data.plateSize === selectedSize
    );
    if (selectedSizeData) {
      setPlateCost(selectedSizeData.plateCost);
    }
  };

  const handleOtherFieldChange = (e) => {
    const value = e.target.value;
    setOtherField(value);
  };

  return (
    <div className="cost">
      <h2>Cost Calculation</h2>
      <form>
        <label htmlFor="paperSize">Paper Size:</label>
        <select
          id="paperSize"
          value={paperSize}
          onChange={handlePaperSizeChange}
        >
          <option value="">Select Paper Size</option>
          <option value="A3">A3</option>
          <option value="A4">A4</option>
          <option value="A5">A5</option>
        </select>

        <label htmlFor="plateSize">Plate Size:</label>
        <select
          id="plateSize"
          value={plateSize}
          onChange={handlePlateSizeChange}
        >
          <option value="">Select Plate Size</option>
          <option value="10x15">10x15</option>
          <option value="15x20">15x20</option>
          <option value="20x25">20x25</option>
        </select>
        
        <label htmlFor="pages">Pages (Number of pages per copy):</label>
        <input
          type="number"
          id="pages"
          value={pages}
          onChange={handlePagesChange}
          min="8"
          max="500"
          required
        />

        <label htmlFor="quantity">Quantity (Number of copies):</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="50"
          max="10000"
          required
        />

        <label htmlFor="paper-type">Paper Type</label>
        <select id="paper-type" name="paper-type" required>
          <option value="">Select Paper Type</option>
          <option value="paper-1">Art Paper</option>
          <option value="paper-2">Art Board</option>
          <option value="paper-3"></option>
        </select>

        <label htmlFor="paper-thickness">Paper Thickness (in GSM)</label>
        <select id="paper-thickness" name="paper-thickness" required>
          <option value="">Thickness</option>
          <option value="thick-1">100 GSM</option>
          <option value="thick-2">150 GSM</option>
          <option value="thick-3">200 GSM</option>
          <option value="thick-4">300 GSM</option>
        </select>

        <label htmlFor="otherField">Notes:</label>
        <input
          type="text"
          id="otherField"
          value={otherField}
          onChange={handleOtherFieldChange}
        />

        <div className="cost-details">
          <h3>Cost Breakdown:</h3>
          <p className="m-p">Paper Size: {paperSize}</p>
          <p className="m-p">Plate Size: {plateSize}</p>
          <p className="m-p">
            Appropriate Plate size for the paper size: {plateSize}
          </p>
          <p className="m-p">
            Total Number of Pages: <b>{totalPages(quantity, pages)}</b>
          </p>
          <p className="m-p">
            Total Sheets: <b>{totalSheets(quantity, pages)}</b>
          </p>
          <p className="m-p">
            Total Reams: <b>{totalReams(quantity, pages)}</b>
          </p>
          <p className="m-p">
            Total Packet: <b>{totalPacket(quantity)}</b>
          </p>
          <p className="m-p">
            Cost of Packet: <b>Rs. 2800</b>
          </p>
          <p className="m-p">
            Cost of Ream: <b>Rs. 4900</b>
          </p>
          {/* <p>Calculation of Outer Page: Rs. <b>{outerCost(quantity)}</b></p> */}
          <p className="m-p">
            Cost of total reams:{" "}
            <b>Rs. {Math.round(((pages * quantity) / 16 / 500) * 4900)}</b>
          </p>
          <p className="m-p">
            Cost of per plate: <b>Rs. 400</b>
          </p>
          <p className="sub-p">
            Total Outer Cost (Cover Cost):{" "}
            <b>Rs. {Math.ceil(totalPacket(quantity) * 2800)}</b>
          </p>
          <p className="sub-p">
            Cost of Inner Pages:{" "}
            <b> Rs. {Math.round(innerCost(quantity, pages))}</b>
          </p>
          <p className="sub-p">
            Total Cost of Plate: <b>Rs. {platePrice(quantity, pages)}</b>
          </p>
          <p className="sub-p">
            Cost of Binding: <b>Rs. {Math.ceil(5 * quantity)}</b>
          </p>
          <h2>
            Total: Rs:{" "}
            {Math.ceil(totalPacket(quantity) * 2800) +
              Math.round(innerCost(quantity, pages)) +
              platePrice(quantity, pages) +
              Math.ceil(5 * quantity)}{" "}
          </h2>
        </div>
      </form>
    </div>
  );
};
export default CostCalculation;
