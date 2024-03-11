import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import React from "react";
import ReactDOM from "react-dom";

import "./test.css";

const DrawerOpen = ({
  paperSize,
  setPaperSize,
  plateSize,
  setPlateSize,
  quantity,
  laminationCost,
  setQuantity,
  pages,
  selectedLaminationType,
  setPages,
  otherField,
  setOtherField,
  selectedPaperType,
  selectedBindingType,
  setSelectedPaperType,
  selectedInkType,
  outerSelectedPaperType,
  setOuterSelectedPaperType,
  selectedPaperThickness,
  setSelectedPaperThickness,
  selectedOuterPaperThickness,
  setSelectedOuterPaperThickness,
  outerCost,
  changeCostPerKg,
  setChangeCostPerKg,
  showPopup,
  inkCost,
  totalCost,
  setShowPopup,
  laminationPrice,
  setLaminationPrice,
  totalSheets,
  plateSizes,
  costReam,
  totalReams,
  setPlateSizes,
  outerChangeCostPerKg,
  totalPacket,
  setOuterChangeCostPerKg,
}) => {
  //   const [open, setOpen] = React.useState(false);
  const [openWithHeader, setOpenWithHeader] = React.useState(false);

  return (
    <>
      <ButtonToolbar>
        {/* <Button onClick={() => setOpen(true)}>Open</Button> */}
        <Button className="btn-open" onClick={() => setOpenWithHeader(true)}>
          Open Cost Breakdown
        </Button>
      </ButtonToolbar>
      {/* 
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Drawer.Body>
          <Placeholder.Paragraph />
        </Drawer.Body>
      </Drawer> */}

      <Drawer open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
        <Drawer.Header>
          <Drawer.Title>Cost Breakdown</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpenWithHeader(false)}>Cancel</Button>
            <Button
              onClick={() => setOpenWithHeader(false)}
              appearance="primary"
            >
              Send Quotation
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <div className="cost-heading">
            <h2>Cost Breakdown</h2>
          </div>
          <div className="cost-container">
            <h3>Paper</h3>
            <br></br>
            <p>
              {" "}
              Total Number of Pages: <b>{pages}</b>
            </p>
            <p>
              Paper size: <b>{paperSize}</b>
            </p>
            <p>
              {" "}
              Inner type: <b>{selectedPaperType}</b>
            </p>
            <p>
              {" "}
              Inner paper thickness: <b>{selectedPaperThickness} gsm </b>
            </p>
            <p>
              Total Sheets: <b>{totalSheets}</b>
            </p>
            <p>
              Total Reams: <b>{totalReams}</b>
            </p>
            <p>
              Cost of Reams: Rs. <b>{costReam}</b>
            </p>
            <p>Unit cost for paper type (per kg): Rs. <b>{changeCostPerKg}</b></p>
            <br></br>
            <br></br>
            <p></p>
            <h3>Cover Paper</h3>
            <p>
              Cover paper type: <b>{outerSelectedPaperType}</b>
            </p>
            <p>
              Cover paper thickness: <b>{selectedOuterPaperThickness} gsm</b>
            </p>
           
            <p>
              Total packet: <b>{totalPacket}</b>
            </p>
            <br></br>
            <h3>Plate Details</h3>
            <p>
              Chosen plate size: <b>{plateSize}</b>
            </p>
            <p>
              Ink Details: <b>{selectedInkType}</b>
            </p>
            <p>
              Cost of Ink: Rs. <b>{inkCost * 4}</b>
            </p>
            <br></br>
            <br></br>
            <h3>Binding </h3>
            <p>
              {" "}
              Selected binding type: Rs. <b>{selectedBindingType}</b>
            </p>
            <br></br>
            <br></br>
            <h3>Lamination</h3>
            <p>Type of Lamination: {selectedLaminationType}</p>
            <p>Cost of Lamination: Rs. <b>{laminationCost}</b></p>
            <br></br>
            <h1>Total Cost:</h1>
            <h3> Rs. <b> {totalCost} </b></h3>
            
          </div>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default DrawerOpen;
