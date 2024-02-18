import React, { useState } from 'react';
import "../styles/cost-calc.css"

const CostCalculation = () => {
  const [paperSize, setPaperSize] = useState('');
  const [plateSize, setPlateSize] = useState('');
  const [plateCost, setPlateCost] = useState(0);
  const [otherField, setOtherField] = useState('');

  const sizesAndCosts = [
    { paperSize: 'A3', plateSize: '10x15', plateCost: 10 },
    { paperSize: 'A4', plateSize: '15x20', plateCost: 15 },
    { paperSize: 'A5', plateSize: '20x25', plateCost: 20 },
  ];

  const handlePaperSizeChange = (e) => {
    const selectedSize = e.target.value;
    setPaperSize(selectedSize);

    const selectedSizeData = sizesAndCosts.find((data) => data.paperSize === selectedSize);
    if (selectedSizeData) {
      setPlateSize(selectedSizeData.plateSize);
      setPlateCost(selectedSizeData.plateCost);
    }
  };

  const handlePlateSizeChange = (e) => {
    const selectedSize = e.target.value;
    setPlateSize(selectedSize);

    // Find the corresponding plate cost
    const selectedSizeData = sizesAndCosts.find((data) => data.plateSize === selectedSize);
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
            <select id="paperSize" value={paperSize} onChange={handlePaperSizeChange}>
                <option value="">Select Paper Size</option>
                <option value="A3">A3</option>
                <option value="A4">A4</option>
                <option value="A5">A5</option>
            </select>

            <label htmlFor="plateSize">Plate Size:</label>
            <select id="plateSize" value={plateSize} onChange={handlePlateSizeChange}>
                <option value="">Select Plate Size</option>
                <option value="10x15">10x15</option>
                <option value="15x20">15x20</option>
                <option value="20x25">20x25</option>
            </select>
            <label htmlFor='quantity'>Quantity (Number of copies)</label>
            <input type='number' id='quantity' name='quantity' min='1' max='100' required></input>

            <label htmlFor="otherField">Other Field:</label>
            <input type="text" id="otherField" value={otherField} onChange={handleOtherFieldChange} />

            <div className="cost-details">
                <h3>Cost Details:</h3>
                <p>Paper Size: {paperSize}</p>
                <p>Plate Size: {plateSize}</p>
                <p>Appropriate Plate size for the paper size: {plateSize}</p>
                <p>Plate Cost: ${plateCost}</p>
                <p>Other Field: {otherField}</p>
            </div>
        </form>
    </div>
);
};
export default CostCalculation;

            
