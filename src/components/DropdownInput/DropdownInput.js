import React from 'react';
import './DropdownInput.css';

export default function DropdownInput({ options, value, onChange, label }) {
  return (
    <div>
      <label htmlFor="dropdown" className="visually-hidden">
        {label}
      </label>
      <select id="dropdown" value={value} onChange={onChange} className="dropdown-select">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
