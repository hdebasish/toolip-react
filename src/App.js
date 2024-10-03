import { Tooltip } from './component/Tooltip';
import './App.css';
import { useState } from 'react';

function App() {

  const [ tooltip, setTooltip ] = useState(false);

  const options = {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "110%",
  }

  const showTooltip = () => {
    setTooltip(true);
  }

  const hideTooltip = () => {
    setTooltip(false);
  }


  return (
    <div className="App">
      <div className="tooltipText" onMouseOver={showTooltip} onMouseLeave={hideTooltip}>Hover over me!
        {  tooltip && <Tooltip options={options}/>}
      </div>
    </div>
  );
}

export default App;
