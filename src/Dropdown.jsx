import React from "react";
export const Dropdown = ({ handler, obj, index }) => {
  return (
    <>
      <div>
      <div className="Dropdown_container">
        {/* Check Validation */}
        {Object.keys(obj).length !== 0 ? (
          <select
            onChange={(e) => {
              handler(obj, e.target.value, index);
            }}
            className="form-select mt-3"
            aria-label="Default select example"
          >
            <option disabled selected>
              --Select--
            </option>
            {/* Map */}
            {Object.keys(obj).map((val, index) => (
              <option key={index} value={val}>
                {val}
              </option>
            ))}
          </select>
        ) : null}
      </div>
    </div>
    </>
  );
};
