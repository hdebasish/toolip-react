// Import the Tooltip component from the './component/Tooltip' file
import { Tooltip } from './component/Tooltip';

// Import the App.css file for styling
import './App.css';

// Import the useState hook from the 'react' library
import { useState } from 'react';

// Define the App function component
function App() {
  // Initialize a state variable 'tooltip' with a default value of false
  const [tooltip, setTooltip] = useState(false);

  // Define an options object with CSS position properties
  const options = {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "110%",
  };

  // Define a function to show the tooltip when called
  const showTooltip = () => {
    setTooltip(true);
  };

  // Define a function to hide the tooltip when called
  const hideTooltip = () => {
    setTooltip(false);
  };

  // Return the JSX elements for the App component
  return (
    <div className="App">
      {/* Create a div element with a class of 'tooltipText' */}
      <div className="tooltipText" 
           // Call the showTooltip function when the mouse is hovered over this element
           onMouseOver={showTooltip} 
           // Call the hideTooltip function when the mouse is moved away from this element
           onMouseLeave={hideTooltip}>
        Hover over me!
        {/* Conditionally render the Tooltip component if the 'tooltip' state is true */}
        {tooltip && <Tooltip options={options}/>}
      </div>
    </div>
  );
}

// Export the App component as the default export
export default App;