import React from 'react';
import "../styles/single-page.css"

const SinglePage = () => {
  return (
    <div className="single-page">
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="dimensions">Dimensions:</label>
            <select id="dimensions" name="dimensions">
              {/* Add options for dimensions */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="pages">Pages:</label>
            <select id="pages" name="pages">
              {/* Add options for pages */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="pageType">Page Type:</label>
            <select id="pageType" name="pageType">
              {/* Add options for page types */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="copies">Number of Copies:</label>
            <input type="number" id="copies" name="copies" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="image-description">
        {/* Add image and description here */}
      </div>
    </div>
  );
};

export default SinglePage;
