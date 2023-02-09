import React from "react";
export const Dropdown = ({ handler, obj }) => {
  return (
    <>
      {Object.keys(obj).length !== 0 ? (
        <div className="Dropdown_container">
          <select
            name=""
            id=""
            class="form-select w-100 mx-5"
            onChange={(e) => handler(obj, e.target.value)}
          >
            <option value="" disabled selected>
              Select
            </option>
            {Object.keys(obj).map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
         
        </div>
      ) : (
        " "
      )}
    </>
  );
};
