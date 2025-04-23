import { useState } from 'react';

export function Myform() {
      const [inputValue, setInputValue] = useState('');

      const handleChange = (e) => {
        setInputValue(e.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted value:', inputValue);
        // Do something with the value
      };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Myform;