// Import the styles from the './tooltip.module.css' file
import styles from "./tooltip.module.css"

// Define the Tooltip function component
export function Tooltip(props) {
  // Destructure the options object from the props
  const { top, right, bottom, left } = props.options;

  // Create a style object with the CSS position properties
  const style = {
    top,
    right,
    bottom,
    left
  }

  // Return the JSX elements for the Tooltip component
  return (
    // Create a div element with the 'tooltip' class from the styles
    <div style={style} className={styles.tooltip}>
      Thanks for hovering, I'm a tooltip!
    </div>
  );
}