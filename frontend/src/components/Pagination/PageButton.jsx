import styles from "./PaginationBar.module.css";

function PageButton({ number: index, isCurrent, onClick }) {
  if (isCurrent) {
    return (
      <button className={styles.page_button_current} disabled={true}>
        {index + 1}
      </button>
    );
  } else {
    return (
      <button className={styles.page_button} onClick={onClick}>
        {index + 1}
      </button>
    );
  }
}

export default PageButton;
