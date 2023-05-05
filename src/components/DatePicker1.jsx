import React, { useRef, useState } from 'react';
import EventEmitter1 from '../utils/EventEmitter1';
const DatePicker1 = () => {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
    
    EventEmitter1.emit('selectedDate',e.target.value);
  };

  return (
    <div>
      <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
      <p>Selected Date: {date}</p>
    </div>
  );
};

export default DatePicker1;