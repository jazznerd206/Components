import React from 'react';
import './style.css'

function Select ({ values, callback, disabled = false, readonly = false, selected }) {

    const controller = () => {
        let panel = document.getElementById('select');
        panel.open = (e, ui) => {
                
        }
    }


    console.log('function ' + values)
    return (
    <div className="dropdown-container">
      <select
        id="select"
        disabled={disabled}
        readOnly={readonly}
        onChange={({ target : { value } }) => callback(value)}
      >
        {values.map(([value, text]) => <option selected={selected === value}value={value}>{text}</option>)}
      </select>
    </div>
    );
  }

export default Select
