import React from 'react';
import './DropdownInput.css';

export default function DropdownInput({ options, value, onChange }) {
  return (
    <div>
      <select id="dropdown" value={value} onChange={onChange} className="dropdown-select">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
