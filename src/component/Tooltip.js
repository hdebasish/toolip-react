import styles from "./tooltip.module.css"

export function Tooltip(props) {

    const { top, right, bottom, left } = props.options;

    const style = {
        top,
        right,
        bottom,
        left
    }

    return (
        <div style={style} className={styles.tooltip}>
            Thanks for hovering, I'm a tooltip!
        </div>
    );
}