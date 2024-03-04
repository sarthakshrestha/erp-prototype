import React, { useState, useEffect } from "react";
import "../styles/varform.css";

function VarForm() {
  const [platePrice, setPlatePrice] = useState("");
  const [paperPrice, setPaperPrice] = useState("");
  const [dimensionPrice, setDimensionPrice] = useState("");
  const [reamPrice, setReamPrice] = useState("");
  const [selectedBindingType, setSelectedBindingType] = useState("");
  const [selectedPaperType, setSelectedPaperType] = useState("");
  const [selectedPaperThickness, setSelectedPaperThickness] = useState("");
  const [selectedPaperCost, setSelectedPaperCost] = useState(0);
  const [additionalCost, setAdditionalCost] = useState(0);
  const [customPaperTypeCost, setCustomPaperTypeCost] = useState({});

  const bindingTypes = [
    "Select Binding Type",
    "Center Stitch",
    "Perfect Binding",
    "Juju Binding",
    "Metal-foiling",
    "Diecuting",
    "Perforation",
    "Padding",
    "Spot Vanishing",
    "Wiro",
    "Spiral",
    "Clear Sheet",
  ];

  const paperTypes = [
    {
      name: "Art Paper",
      thickness: [
        "60 GSM",
        "70 GSM",
        "80 GSM",
        "90 GSM",
        "100 GSM",
        "115 GSM",
        "120 GSM",
        "128 GSM",
        "150 GSM",
        "200 GSM",
        "250 GSM",
        "300 GSM",
      ],
    },
    {
      name: "Art Board",
      thickness: [
        "60 GSM",
        "70 GSM",
        "80 GSM",
        "90 GSM",
        "100 GSM",
        "115 GSM",
        "120 GSM",
        "128 GSM",
        "150 GSM",
        "200 GSM",
        "250 GSM",
        "300 GSM",
      ],
    },
    {
      name: "Ivory Board",
      thickness: [
        "60 GSM",
        "70 GSM",
        "80 GSM",
        "90 GSM",
        "100 GSM",
        "115 GSM",
        "120 GSM",
        "128 GSM",
        "150 GSM",
        "200 GSM",
        "250 GSM",
        "300 GSM",
      ],
    },
    {
      name: "Card Board",
      thickness: [
        "60 GSM",
        "70 GSM",
        "80 GSM",
        "90 GSM",
        "100 GSM",
        "115 GSM",
        "120 GSM",
        "128 GSM",
        "150 GSM",
        "200 GSM",
        "250 GSM",
        "300 GSM",
      ],
    },
    {
      name: "Colored Paper",
      thickness: [
        "60 GSM",
        "70 GSM",
        "80 GSM",
        "90 GSM",
        "100 GSM",
        "115 GSM",
        "120 GSM",
        "128 GSM",
        "150 GSM",
        "200 GSM",
        "250 GSM",
        "300 GSM",
      ],
    },
    {
      name: "Wood Free",
      thickness: [
        "60 GSM",
        "70 GSM",
        "80 GSM",
        "90 GSM",
        "100 GSM",
        "115 GSM",
        "120 GSM",
        "128 GSM",
        "150 GSM",
        "200 GSM",
        "250 GSM",
        "300 GSM",
      ],
    },
    {
      name: "Tough Coat",
      thickness: [
        "60 GSM",
        "70 GSM",
        "80 GSM",
        "90 GSM",
        "100 GSM",
        "115 GSM",
        "120 GSM",
        "128 GSM",
        "150 GSM",
        "200 GSM",
        "250 GSM",
        "300 GSM",
      ],
    },
    {
      name: "Matte Paper",
      thickness: [
        "60 GSM",
        "70 GSM",
        "80 GSM",
        "90 GSM",
        "100 GSM",
        "115 GSM",
        "120 GSM",
        "128 GSM",
        "150 GSM",
        "200 GSM",
        "250 GSM",
        "300 GSM",
      ],
    },
    {
      name: "Carbonless Paper",
      thickness: [
        "60 GSM",
        "70 GSM",
        "80 GSM",
        "90 GSM",
        "100 GSM",
        "115 GSM",
        "120 GSM",
        "128 GSM",
        "150 GSM",
        "200 GSM",
        "250 GSM",
        "300 GSM",
      ],
    },
    {
      name: "Off-white Paper",
      thickness: [
        "60 GSM",
        "70 GSM",
        "80 GSM",
        "90 GSM",
        "100 GSM",
        "115 GSM",
        "120 GSM",
        "128 GSM",
        "150 GSM",
        "200 GSM",
        "250 GSM",
        "300 GSM",
      ],
    },
  ];

  const paperThicknesses = [
    "60 GSM",
    "70 GSM",
    "80 GSM",
    "90 GSM",
    "100 GSM",
    "115 GSM",
    "120 GSM",
    "128 GSM",
    "150 GSM",
    "200 GSM",
    "250 GSM",
    "300 GSM",
  ];

  useEffect(() => {
    if (selectedPaperType && selectedPaperThickness) {
      const cost =
        customPaperTypeCost[selectedPaperType]?.[selectedPaperThickness] || 0;
      setSelectedPaperCost(cost);
    }
  }, [selectedPaperType, selectedPaperThickness, customPaperTypeCost]);

  const handleReamPriceChange = (event) => {
    setReamPrice(event.target.value);
  };

  const handlePlatePriceChange = (event) => {
    setPlatePrice(event.target.value);
  };

  const handlePaperPriceChange = (event) => {
    setPaperPrice(event.target.value);
  };

  const handleDimensionPrice = (event) => {
    setDimensionPrice(event.target.value);
  };

  const handleBindingTypeChange = (event) => {
    setSelectedBindingType(event.target.value);
  };

  const handlePaperTypeChange = (event) => {
    const paperType = event.target.value;
    setSelectedPaperType(paperType);
    setSelectedPaperThickness("");
    setSelectedPaperCost(0);
  };

  const handlePaperThicknessChange = (event) => {
    const thickness = event.target.value;
    setSelectedPaperThickness(thickness);
  };

  const handleAdditionalCostChange = (event) => {
    setAdditionalCost(event.target.value);
  };

  const handleCustomPaperCostChange = (event) => {
    const { name, value } = event.target;
    setCustomPaperTypeCost((prevCosts) => ({
      ...prevCosts,
      [selectedPaperType]: {
        ...prevCosts[selectedPaperType],
        [name]: parseFloat(value) || 0,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Plate Price:", platePrice);
    console.log("Paper Price:", paperPrice);
    console.log("Paper Price:", dimensionPrice);
    console.log("Selected Binding Type:", selectedBindingType);
    console.log("Selected Paper Type:", selectedPaperType);
    console.log("Selected Paper Thickness:", selectedPaperThickness);
    console.log("Selected Paper Cost:", selectedPaperCost);
    console.log("Additional Cost:", additionalCost);
    console.log("Custom Paper Type Cost:", customPaperTypeCost);
  };

  return (
    <form onSubmit={handleSubmit} className="var-form">
      <h1>Price Update Form</h1>
      <label className="var-label">
        Cost of packet (per unit):
        <input
          className="var-input"
          type="number"
          value={platePrice}
          onChange={handlePlatePriceChange}
          required
        />
      </label>
      <br />
      <label className="var-label">
        Cost of ream (per unit):
        <input
          className="var-input"
          type="number"
          value={paperPrice}
          onChange={handlePaperPriceChange}
          required
        />
      </label>
      <label className="var-label">
        Cost of plate (per unit):
        <input
          className="var-input"
          type="number"
          value={dimensionPrice}
          onChange={handleDimensionPrice}
          required
        />
      </label>
      <label className="var-label">
        Cost of binding (per copy):
        <select
          className="var-input"
          value={selectedBindingType}
          onChange={handleBindingTypeChange}
          required
        >
          {bindingTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label className="var-label">
        Paper Type:
        <select
          className="var-input"
          value={selectedPaperType}
          onChange={handlePaperTypeChange}
          required
        >
          <option value="">Select Paper Type</option>
          {paperTypes.map((type, index) => (
            <option key={index} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </label>
      {selectedPaperType && (
        <label className="var-label">
          Inner Paper Thickness (in GSM):
          <select
            className="var-input"
            value={selectedPaperThickness}
            onChange={handlePaperThicknessChange}
            required
          >
            <option value="">Select Paper Thickness</option>
            {paperThicknesses.map((thickness, index) => (
              <option key={index} value={thickness}>
                {thickness}
              </option>
            ))}
          </select>
        </label>
      )}
      {selectedPaperCost > 0 && (
        <>
          <label className="var-label">
            Cost of {selectedPaperType} ({selectedPaperThickness}): $
            {selectedPaperCost}
          </label>
          <label className="var-label">
            Additional Cost:
            <input
              className="var-input"
              type="number"
              value={additionalCost}
              onChange={handleAdditionalCostChange}
              required
            />
          </label>
        </>
      )}
      {selectedPaperType && selectedPaperThickness && (
        <>
          <label className="var-label">
            Custom Cost of {selectedPaperType} ({selectedPaperThickness}):
            <input
              className="var-input"
              type="number"
              value={
                customPaperTypeCost[selectedPaperType]?.[selectedPaperThickness]
              }
              onChange={handleCustomPaperCostChange}
              required
            />
          </label>
        </>
      )}
      <br />
      <button className="var-button" type="submit">
        Update Data
      </button>
    </form>
  );
}

export default VarForm;
