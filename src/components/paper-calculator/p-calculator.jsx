import React, { useState } from 'react';
import "../styles/p-calculator.css";

function PCalculator() {
    const [pages, setPages] = useState(0);
    const [copies, setCopies] = useState(0);
    const [magazineSize, setMagazineSize] = useState('');
    const [paperSize, setPaperSize] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setPages(0);
        setCopies(0);
        setMagazineSize('');
        setPaperSize('');
    };

    return (
        <div className="p-calculator">
            <div className='inner-paper'>
            <h1>Calculating cost of the inner paper</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Number of Pages:
                    <input
                        type="number"
                        value={pages}
                        onChange={(e) => setPages(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Number of Copies:
                    <input
                        type="number"
                        value={copies}
                        onChange={(e) => setCopies(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Magazine Size:
                    <input
                        type="text"
                        value={magazineSize}
                        onChange={(e) => setMagazineSize(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Paper Size:
                    <input
                        type="text"
                        value={paperSize}
                        onChange={(e) => setPaperSize(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Calculate</button>
            </form>
            </div>
            <div className='cover-paper'>
             <h1>Calculating cost of the cover paper</h1>
            </div>
        </div>
    );
}

export default PCalculator;
