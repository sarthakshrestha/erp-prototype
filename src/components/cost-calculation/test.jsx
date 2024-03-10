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
  setQuantity,
  pages,
  setPages,
  otherField,
  setOtherField,
  selectedPaperType,
  selectedBindingType,
  setSelectedPaperType,
  outerSelectedPaperType,
  setOuterSelectedPaperType,
  selectedPaperThickness,
  setSelectedPaperThickness,
  selectedOuterPaperThickness,
  setSelectedOuterPaperThickness,
  changeCostPerKg,
  setChangeCostPerKg,
  showPopup,
  setShowPopup,
  laminationPrice,
  setLaminationPrice,
  plateSizes,
  setPlateSizes,
  outerChangeCostPerKg,
  setOuterChangeCostPerKg
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
        <div className="cost-container">
        <h1>Cost Breakdown</h1>
        <br></br>
        <br></br>
        <h3>Plate Size</h3>
        <p>Chosen plate size: {plateSize}</p>
        <br></br>
        <h3>Paper Size</h3>
        <p>Chosen paper size: {paperSize}</p> 
        <br></br>
        <h3>Total Pages</h3>
        <p> Pages: {pages}</p>
        <br></br>
        <h3>Selected Binding Type</h3>
        <p> Selected binding type: {selectedBindingType}</p>
        <br></br>
        <h3>Selected Inner Paper Type</h3>
        <p> Selected inner type: {selectedPaperType}</p>
        <p> Selected inner paper thickness: {selectedPaperThickness} </p>
        <br></br>
        <h3> Plate Size </h3>
        <p> Selected plate size: {}</p>
        </div>
          
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default DrawerOpen;
