import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/cost-calc.css";
import axios from "axios";
import Header from "../resuable-comps/header";

const CostCalculation = () => {
  const [paperSize, setPaperSize] = useState("");
  const [plateSize, setPlateSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pages, setPages] = useState("");
  const [otherField, setOtherField] = useState("");
  const [selectedPaperType, setSelectedPaperType] = useState("");
  const [outerSelectedPaperType, setOuterSelectedPaperType] = useState("");
  const [selectedPaperThickness, setSelectedPaperThickness] = useState("");
  const [selectedOuterPaperThickness, setSelectedOuterPaperThickness] =
    useState("");
  const [changeCostPerKg, setChangeCostPerKg] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [laminationPrice, setLaminationPrice] = useState("");
  const [plateSizes, setPlateSizes] = useState([]);
  const [outerChangeCostPerKg, setOuterChangeCostPerKg] = useState(0);

  const [reamCost, setReamCost] = useState(0);
  const [packetCost, setPacketCost] = useState(0);
  const [plateCost, setPlateCost] = useState(0);
  const [inkCost, setInkCost] = useState(0);
  const [bindingCost, setBindingCost] = useState(0);
  const [selectedBindingType, setSelectedBindingType] = useState("");
  const [selectedInkType, setSelectedInkType] = useState("");
  const [selectedLaminationType, setSelectedLaminationType] = useState("");

  const handleCustomPrice = () => {
    // Make a POST request to your endpoint
    axios
      .post("http://localhost:8081/bindingCost", {
        bindingType: selectedBindingType,
        bindingCost: bindingCost,
      })
      .then((response) => {
        // Handle successful response if needed
        console.log("Custom price submitted successfully");
        // You may want to clear the state after successful submission
        setSelectedBindingType("");
        setBindingCost("");
        togglePopup();
      })
      .catch((error) => {
        // Handle error if needed
        console.error("Error submitting custom price:", error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/plateCost")
      .then((response) => {
        const plateCostData = response.data;
        // Map plateCostData to plateSizes format
        const mappedPlateSizes = plateCostData.map((plate) => ({
          value: plate.plateSize,
          label: plate.plateSize,
        }));
        // Update state with fetched plate sizes
        setPlateSizes(mappedPlateSizes);
      })
      .catch((error) => {
        console.error("Error fetching plate sizes:", error);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("//localhost:8081/cost")
  //     .then((response) => {
  //       const data = response.data;
  //       setReamCost(data.find((cost) => cost.name === "ream").price);
  //       setPacketCost(data.find((cost) => cost.name === "packet").price);
  //       setPlateCost(data.find((cost) => cost.name === "plate").price);
  //       setBindingCost(data.find((cost) => cost.name === "binding").price);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  const sizesAndCosts = [
    { paperSize: "A3", plateSize: "19x25 or 20x30", plateCost: 40 },
    { paperSize: "A4", plateSize: "19x25", plateCost: 15 },
    { paperSize: "A5", plateSize: "19x25", plateCost: 20 },
    { paperSize: "B5", plateSize: "15x20 or 20x30", plateCost: 40 },
    { paperSize: "Letter", plateSize: "18x24", plateCost: 30 },
  ];

  const plateValue = [
    {
      value: 126,
    },
    {
      value: 600,
    },
  ];

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handlePaperThicknessChange = (e) => {
    const selectedPaperThickness = e.target.value;
    setSelectedPaperThickness(selectedPaperThickness);
  };

  const [isLaminationSelected, setIsLaminationSelected] = useState(false);

  const handleOuterPaperThicknessChange = (e) => {
    const selectedOuterPaperThickness = e.target.value;
    setSelectedOuterPaperThickness(selectedOuterPaperThickness);
  };

  const handleOuterPaperTypeChange = (e) => {
    const outerSelectedPaperType = e.target.value;
    setOuterSelectedPaperType(outerSelectedPaperType);

    // Fetch the paper cost data from the backend
    axios
      .get("http://localhost:8081/paperCost")
      .then((response) => {
        const paperCostData = response.data;
        // Find the entry corresponding to the selected outer paper type
        const selectedOuterPaperCost = paperCostData.find(
          (cost) =>
            cost.paperType.toLowerCase().replace("_", " ") ===
            outerSelectedPaperType.toLowerCase()
        );
        if (selectedOuterPaperCost) {
          // Update the state with the fetched costPerKg value for outer paper type
          setOuterChangeCostPerKg(selectedOuterPaperCost.costPerKg);
        }
      })
      .catch((error) => {
        console.error("Error fetching outer paper cost data:", error);
      });
  };

  const handlePaperTypeChange = (e) => {
    const selectedPaperType = e.target.value;
    setSelectedPaperType(selectedPaperType);

    // Fetch the paper cost data from the backend
    axios
      .get("http://localhost:8081/paperCost")
      .then((response) => {
        const paperCostData = response.data;
        // Find the entry corresponding to the selected paper type
        const selectedPaperCost = paperCostData.find(
          (cost) =>
            cost.paperType.toLowerCase().replace("_", " ") ===
            selectedPaperType.toLowerCase()
        );
        if (selectedPaperCost) {
          // Update the state with the fetched costPerKg value
          setChangeCostPerKg(selectedPaperCost.costPerKg);
        }
      })
      .catch((error) => {
        console.error("Error fetching paper cost data:", error);
      });
  };

  const handleBindingTypeChange = (e) => {
    const selectedBindingType = e.target.value;
    setSelectedBindingType(selectedBindingType);

    // Fetch the binding cost data from the backend
    axios
      .get("http://localhost:8081/bindingCost")
      .then((response) => {
        const bindingCostData = response.data;
        // Find the entry corresponding to the selected binding type
        const selectedBindingCost = bindingCostData.find(
          (cost) =>
            cost.bindingType.toLowerCase() === selectedBindingType.toLowerCase()
        );
        if (selectedBindingCost) {
          // Update the state with the fetched binding cost value
          setBindingCost(selectedBindingCost.bindingCost);
          setIsLaminationSelected(false);
          setShowPopup(false); // No need to show popup if data is available
        } else {
          // If data is not present, set flag to show popup for custom price
          setIsLaminationSelected(true);
          setShowPopup(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching binding cost data:", error);
        // If there's an error, assume custom price is required and show popup
        setIsLaminationSelected(true);
        setShowPopup(true);
      });
  };

  const paperSizes = [
    { value: "A3", label: "A3" },
    { value: "A4", label: "A4" },
    { value: "A5", label: "A5" },
    { value: "B5", label: "B5" },
    { value: "Letter", label: "Letter" },
  ];

  const paperType = [
    { type: "Art Paper" },
    { type: "Art Board " },
    { type: "Ivory" },
    { type: "Card Board" },
    { type: "Colored Paper" },
    { type: "Wood Free" },
    { type: "Tough Coat" },
    { type: "Matte Paper" },
    { type: "Carbonless Paper" },
    { type: "Off-white Paper" },
  ];

  const sheetDimension = [
    {
      value: 864, // 24 x 36
    },
    {
      value: 600, // 20 x 30
    },
  ];

  const inkTypes = [
    { value: "CMYK", label: "CMYK" },
    { value: "Spot", label: "Spot" },
    { value: "Black and White", label: "Black and White" },
  ];

  const paperThicknesses = [
    60, 70, 80, 90, 100, 115, 120, 128, 150, 200, 250, 300,
  ];

  const bindingType = [
    "Center Stitch",
    "Perfect Binding",
    "Juju",
    "Metal-foiling",
    "Diecuting",
    "Perforation",
    "Padding",
    "Spot Vanishing",
    "Wiro",
    "Spiral",
    "Clear Sheet",
  ];

  const laminationType = [
    "Normal Glossy",
    "Normal Matte",
    "Thermal Glossy",
    "Thermal Matte",
  ];

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  };

  const handleLaminationTypeChange = (e) => {
    const selectedLaminationType = e.target.value;
    setSelectedLaminationType(selectedLaminationType);

    const requiresCustomPrice =
      selectedLaminationType === "Normal Glossy" ||
      selectedLaminationType === "Normal Matte" ||
      selectedLaminationType === "Thermal Glossy" ||
      selectedLaminationType === "Thermal Matte";

    setIsLaminationSelected(requiresCustomPrice);

    if (requiresCustomPrice) {
      // Fetch the lamination cost data from the backend
      axios
        .get("http://localhost:8081/laminationCost")
        .then((response) => {
          const laminationCostData = response.data;
          // Find the entry corresponding to the selected lamination type
          const selectedLaminationCost = laminationCostData.find(
            (cost) => cost.laminationType === selectedLaminationType
          );
          if (selectedLaminationCost) {
            // Update the state with the fetched lamination cost value
            setLaminationPrice(selectedLaminationCost.laminationCost);
          }
        })
        .catch((error) => {
          console.error("Error fetching lamination cost data:", error);
        });
    } else {
      setShowPopup(false);
    }
  };

  function reamCalc(selectedPaperThickness, costPerKg) {
    return (864 * selectedPaperThickness * costPerKg) / 3100;
  }

  function packetCalc(selectedOuterPaperThickness, outerChangeCostPerKg) {
    return reamCalc(selectedOuterPaperThickness, outerChangeCostPerKg) / 5;
  }

  function totalPages(quantity, pages) {
    return Math.round(quantity * pages);
  }

  function totalSheets(quantity, pages) {
    return totalPages(quantity, pages) / 16;
  }

  function totalReams(pages, quantity) {
    return Math.round((pages * quantity) / 16 / 500);
  }

  function innerCost(quantity, pages, selectedPaperThickness, changeCostPerKg) {
    return (
      totalReams(pages, quantity) *
      reamCalc(selectedPaperThickness, changeCostPerKg)
    );
  }

  function totalPacket(quantity) {
    return Math.ceil(totalSheets(quantity, 4) / 100);
  }

  function calculateLamination(laminationPrice, quantity, pages) {
    return Math.ceil(
      ((12 * 18 * laminationPrice) / 2) * totalPages(quantity, pages)
    );
  }

  function platePrice(pages, plateCost) {
    return pages * plateCost;
  }

  const handlePagesChange = (e) => {
    const value = parseInt(e.target.value);
    setPages(value);
  };

  const handlePlateSizeChange = (e) => {
    const selectedSize = e.target.value;
    console.log("Selected Plate Size:", selectedSize);
    setPlateSize(selectedSize);

    // Fetch the plate cost data
    axios
      .get("http://localhost:8081/plateCost")
      .then((response) => {
        const plateCostData = response.data;
        // Selected plate size
        const selectedPlateCost = plateCostData.find(
          (cost) => cost.plateSize.toLowerCase() === selectedSize.toLowerCase()
        );
        if (selectedPlateCost) {
          // Fetched plate cost value
          setPlateCost(selectedPlateCost.plateCost);
          console.log("Plate cost:", selectedPlateCost.plateCost);

          setInkCost(selectedPlateCost.inkCost);
          // Log out the ink cost for the selected plate size
          console.log("Ink cost:", selectedPlateCost.inkCost);
        }
      })
      .catch((error) => {
        console.error("Error fetching plate cost data:", error);
      });
  };

  const handlePaperSizeChange = (e) => {
    const selectedSize = e.target.value;
    setPaperSize(selectedSize);

    const selectedSizeData = sizesAndCosts.find(
      (data) => data.paperSize === selectedSize
    );
    if (selectedSizeData) {
      setPlateSize(selectedSizeData.plateSize);

      // Add logic to recommend an appropriate plate size based on paper type
      let recommendedPlateSize = selectedSizeData.plateSize;

      // Logic to recommend a plate size based on paper type
      if (selectedPaperType === "Art Paper") {
        recommendedPlateSize = "20x30";
      } else if (selectedPaperType === "Ivory Board") {
        recommendedPlateSize = "19x25";
      }
      // Set the recommended plate size
      setPlateSize(recommendedPlateSize);

      setPlateCost(selectedSizeData.plateCost);
    }
  };

  const handleOtherFieldChange = (e) => {
    const value = e.target.value;
    setOtherField(value);
  };

  const handleInkTypeChange = (e) => {
    setSelectedInkType(e.target.value);
  };

  const totalCost =
    Math.ceil(
      totalPacket(quantity) *
        packetCalc(selectedOuterPaperThickness, outerChangeCostPerKg)
    ) +
    Math.round(
      innerCost(quantity, pages, selectedPaperThickness, changeCostPerKg)
    ) +
    platePrice(pages, plateCost) +
    Math.ceil(bindingCost * quantity) +
    calculateLamination(laminationPrice, quantity, pages);

  return (
    <>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="cost">
        <h2 className="c-heading">Calculate Specs</h2>
        <form>
          <p className="divider-p">Product Specs</p>
          <label htmlFor="paperSize">
            <b>Paper Size:</b>
          </label>
          <select
            id="paperSize"
            value={paperSize}
            onChange={handlePaperSizeChange}
          >
            <option value="">Select Paper Size</option>
            {paperSizes.map((size, index) => (
              <option key={index} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>

          <label htmlFor="pages">
            <b>Pages</b> (Number of pages per copy):
          </label>
          <input
            type="number"
            id="pages"
            value={pages}
            onChange={handlePagesChange}
            min="8"
            max="500"
            required
          />

          <label htmlFor="quantity">
            <b>Quantity</b> (Number of copies):
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="50"
            max="10000"
            required
          />

          <br></br>
          <p className="divider-p">Product Detail</p>
          <label htmlFor="binding-type">Binding Type</label>
          <select
            id="binding-type"
            name="binding-type"
            value={selectedBindingType}
            onChange={handleBindingTypeChange}
            required
          >
            <option value="">Select Binding Type</option>
            {bindingType.map((binding, index) => (
              <option key={index} value={binding}>
                {binding}
              </option>
            ))}
          </select>

          <label htmlFor="binding-type">Cover Treatment</label>
          <select
            id="binding-type"
            name="binding-type"
            value={selectedBindingType}
            onChange={handleBindingTypeChange}
            required
          >
            <option value="">Select Binding Type</option>
            {bindingType.map((binding, index) => (
              <option key={index} value={binding}>
                {binding}
              </option>
            ))}
          </select>

          <br></br>
          
          <p className="divider-p">Material Detail</p>
          <div className="det">
          <div className="det-col">
          <label htmlFor="paper-type">Inner Paper Type</label>
          <select
            id="paper-type"
            name="paper-type"
            value={selectedPaperType} // Set value to the selectedPaperType state
            onChange={handlePaperTypeChange} // Handle change event
            required
          >
            <option value="">Select Paper Type</option>
            {paperType.map((paper, index) => (
              <option key={index} value={paper.type}>
                {paper.type}
              </option>
            ))}
          </select>
          </div>
          <div className="det-col">
          <label htmlFor="paper-thickness">
            Inner Paper Thickness (in GSM)
          </label>
          <select
            id="paper-thickness"
            name="paper-thickness"
            value={selectedPaperThickness}
            onChange={handlePaperThicknessChange}
            required
          >
            <option value="">Set Paper Thickness</option>
            {paperThicknesses.map((thickness, index) => (
              <option key={index} value={thickness}>
                {thickness}
              </option>
            ))}
          </select>
          </div>
          </div>

          <label htmlFor="outer-paper-type">Cover Paper Type</label>
          <select
            id="outer-paper-type"
            name="outer-paper-type"
            value={outerSelectedPaperType}
            onChange={handleOuterPaperTypeChange}
            required
          >
            <option value="">Select Outer Paper Type</option>
            {paperType.map((paper, index) => (
              <option key={index} value={paper.type}>
                {paper.type}
              </option>
            ))}
          </select>

          <label htmlFor="paper-thickness">
            Outer Paper Thickness (in GSM)
          </label>
          <select
            id="paper-outer-thickness"
            name="paper-outer-thickness"
            value={selectedOuterPaperThickness}
            onChange={handleOuterPaperThicknessChange}
            required
          >
            <option value="">Set Paper Thickness</option>
            {paperThicknesses.map((thickness, index) => (
              <option key={index} value={thickness}>
                {thickness}
              </option>
            ))}
          </select>

          <label htmlFor="lamination-type">Lamination Type</label>
          <select
            id="lamination-type"
            name="lamination-type"
            value={selectedLaminationType}
            onChange={handleLaminationTypeChange}
            required
          >
            <option value="">Select Lamination Type</option>
            {laminationType.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          <br></br>
          <p className="divider-p">Process Detail</p>
          <label htmlFor="plateSize">Plate Size:</label>
          <select
            id="plateSize"
            value={plateSize}
            onChange={handlePlateSizeChange}
          >
            <option value="">Select Plate Size</option>
            {/* Mapping over plateSizes directly */}
            {plateSizes.map((size, index) => (
              <option key={index} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
          <label htmlFor="ink-type">Ink Type:</label>
          <select
            id="ink-type"
            name="ink-type"
            value={selectedInkType}
            onChange={handleInkTypeChange}
            required
          >
            <option value="">Select Ink Type</option>
            {inkTypes.map((ink, index) => (
              <option key={index} value={ink.value}>
                {ink.label}
              </option>
            ))}
          </select>

          {showPopup && (
            <div className="popup">
              <div className="popup-inner">
                <h3>Put up custom price for {selectedBindingType}</h3>
                <input
                  type="number"
                  placeholder="Enter custom price"
                  onChange={(e) => setBindingCost(e.target.value)}
                />
                <button onClick={handleCustomPrice} className="submit-btn">
                  Submit
                </button>
                <button onClick={togglePopup} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          )}

          <label htmlFor="otherField">Extra Notes:</label>
          <input
            type="text"
            id="otherField"
            value={otherField}
            onChange={handleOtherFieldChange}
          />

          <div
            className={`cost-details ${isLaminationSelected ? "grey-out" : ""}`}
          >
            <h3>Cost Breakdown:</h3>
            <p className="m-p">
              Paper Size: <span className="bold-p">{paperSize}</span>
            </p>
            <p className="m-p">
              Plate Size: <span className="bold-p">{plateSize}</span>
            </p>
            <p className="m-p">
              Cost of per plate: Rs. <span className="bold-p">{plateCost}</span>
            </p>
            <p className="m-p">
              Inner Paper Type:
              <span className="bold-p">{selectedPaperType}</span>
            </p>
            <p className="m-p">
              Cover/Outer Paper Type:{" "}
              <span className="bold-p">{outerSelectedPaperType}</span>
            </p>
            <br></br>
            <p className="m-p">
              Inner Paper Thickness:{" "}
              <span className="bold-p">{selectedPaperThickness} GSM</span>
            </p>
            <p className="m-p">
              Outer Paper Thickness:{" "}
              <span className="bold-p">{selectedOuterPaperThickness} GSM</span>
            </p>
            <br></br>
            <p className="m-p">
              Selected Binding Type:{" "}
              <span className="bold-p">{selectedBindingType}</span>
            </p>
            <p className="m-p">
              Selected Ink Type:{" "}
              <span className="bold-p">{selectedInkType}</span>
            </p>
            <p className="m-p">
              Selected Lamination Type:{" "}
              <span className="bold-p">{selectedLaminationType}</span>
            </p>
            <p className="m-p">
              Total Number of Pages:{" "}
              <span className="bold-p">{totalPages(quantity, pages)}</span>
            </p>
            <p className="m-p">
              Total Sheets:{" "}
              <span className="bold-p">{totalSheets(quantity, pages)}</span>
            </p>
            <p className="m-p">
              Total Reams (inner):{}
              <span className="bold-p">{totalReams(quantity, pages)}</span>
            </p>
            <p className="m-p">
              Total Packet:{" "}
              <span className="bold-p">{totalPacket(quantity)}</span>
            </p>
            {/* <p className="m-p">
              Total Ream(outer): {totalReams(quantity, 4)}
            </p> */}
            <p className="m-p">
              Cost of Packet: Rs.{" "}
              <span className="bold-p">
                {Math.ceil(
                  packetCalc(selectedOuterPaperThickness, changeCostPerKg)
                )}
              </span>
            </p>
            <p className="m-p">
              Cost of Lamination: Rs.{" "}
              <span className="bold-p">
                {Math.ceil(
                  calculateLamination(laminationPrice, quantity, pages)
                )}
              </span>
            </p>

            <p className="m-p">
              Cost of Ream: Rs.{" "}
              <span className="bold-p">
                {Math.ceil(reamCalc(selectedPaperThickness, changeCostPerKg))}
              </span>
            </p>
            <p className="m-p">
              Unit cost for inner paper (per kg):{" "}
              <span className="bold-p">{changeCostPerKg}</span>
            </p>
            <p className="m-p">
              Unit cost for outer paper (per kg):{" "}
              <span className="bold-p">{outerChangeCostPerKg}</span>
            </p>
            {/* <p>Calculation of Outer Page: Rs. <span className="bold-p">{outerCost(quantity)}</span></p> */}
            <p className="m-p">
              Cost of total reams: Rs.{" "}
              <span className="bold-p">
                {Math.round(((pages * quantity) / 16 / 500) * 4900)}
              </span>
            </p>
            <p className="m-p">
              Cost of Ink: Rs. <span className="bold-p">{inkCost * 4}</span>
            </p>

            <p className="m-p">
              Cost of binding per copy: Rs.{" "}
              <span className="bold-p">{bindingCost}</span>
            </p>
            <p className="sub-p">
              Total Outer Cost (Cover Cost):{" "}
              <span className="bold-p">
                Rs.{" "}
                {Math.ceil(
                  totalPacket(quantity) *
                    reamCalc(selectedOuterPaperThickness, changeCostPerKg)
                )}
              </span>
            </p>
            <p className="sub-p">
              Cost of Inner Pages:{" "}
              <span className="bold-p">
                {" "}
                Rs.{" "}
                {Math.round(
                  innerCost(
                    quantity,
                    pages,
                    selectedPaperThickness,
                    changeCostPerKg
                  )
                )}
              </span>
            </p>
            <p className="sub-p">
              Total Cost of Plate:{" "}
              <span className="bold-p">
                Rs. {platePrice(quantity, plateCost)}
              </span>
            </p>
            <p className="sub-p">
              Cost of Binding:{" "}
              <span className="bold-p">Rs. {Math.ceil(5 * quantity)}</span>
            </p>
            <h2 className="total-cost">
              <span className="tot">Total:</span>{" "}
              <span className="bold-p">Rs: {totalCost}</span>
            </h2>
          </div>
        </form>
      </div>
    </>
  );
};
export default CostCalculation;
