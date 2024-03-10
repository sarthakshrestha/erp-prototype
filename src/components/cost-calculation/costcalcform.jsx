<h3>Cost Breakdown:</h3>
            <br></br>
            
            <p className="m-p">
              Total Number of Pages:{" "}
              <span className="bold-p">{totalPages(quantity, pages)}</span>
            </p>
            <br></br>
            
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