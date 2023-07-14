import React from "react";

const MySelect = ({ options, defaultValue, value, onChangeCb }) => {
  return (
    <select value={value} onChange={(event) => onChangeCb(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>

    //     <select>
    //     <option value='1'>По названию</option>
    //     <option value='1'>По описанию</option>
    //   </select>
  );
};

export default MySelect;