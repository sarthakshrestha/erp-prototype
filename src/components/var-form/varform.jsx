import React, { useState } from 'react';
import "../styles/varform.css"

function VarForm() {
    const [platePrice, setPlatePrice] = useState('');
    const [paperPrice, setPaperPrice] = useState('');
    const [dimensionPrice, setDimensionPrice] = useState('');

    const handlePlatePriceChange = (event) => {
        setPlatePrice(event.target.value);
    };

    const handlePaperPriceChange = (event) => {
        setPaperPrice(event.target.value);
    };

    const handleDimensionPrice = (event) => {
        setDimensionPrice(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Plate Price:', platePrice);
        console.log('Paper Price:', paperPrice);
        console.log('Paper Price:', dimensionPrice);
    };

    return (
        <form onSubmit={handleSubmit} className='var-form'>
        <h1>Price Update Form</h1>
            <label className="var-label">
                Plate Price:
                <input className="var-input" type="number" value={platePrice} onChange={handlePlatePriceChange} required/>
            </label>
            <br />
            <label className="var-label">
                Paper Price:
                <input className="var-input" type="number" value={paperPrice} onChange={handlePaperPriceChange} required/>
            </label>
            <label className="var-label">
                Dimension :
                <input className="var-input" type="number" value={dimensionPrice} onChange={handleDimensionPrice} required/>
            </label>
            <br />
            <button className="var-button" type="submit">Update Data</button>
        </form>
    );
}

export default VarForm;
