import { useState } from "react";
import styles from "./SortDropdown.module.css";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { TbArrowsSort } from "react-icons/tb";
import { IoTextOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { GoSortAsc } from "react-icons/go";
import { GoSortDesc } from "react-icons/go";

function SortDropdown({ onSortChange, sortBy = "title", sortOrder = "asc" }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleSortField = (field) => {
    onSortChange(field, sortOrder);
  };

  const handleSortOrder = (order) => {
    onSortChange(sortBy, order);
  };

  return (
    <div className={styles.container}>
      <button className={styles.sort_button} onClick={() => setShowOptions((prev) => !prev)}>
        <TbArrowsSort size="1.25em" />
        <span className="ms-2">Sort</span>

        {showOptions ? (
          <BiChevronUp size="1.5em" />
        ) : (
          <BiChevronDown size="1.5em" />
        )}
      </button>

      {showOptions && (
        <div className={styles.sortOptions}>
          <h3 className={styles.section_header}>Sort by</h3>

          <button
            className={`${styles.toggleButton} ${sortBy === "title" ? styles.selected : ""}`}
            onClick={() => handleSortField("title")}
          >
            <IoTextOutline fontSize="1.25em" />
            Title
          </button>
          <button
            className={`${styles.toggleButton} ${sortBy === "date" ? styles.selected : ""}`}
            onClick={() => handleSortField("date")}
          >
            <MdAccessTime fontSize="1.25em" />
            Date
          </button>

          <div className={styles.section_divider}></div>

          <h3 className={styles.section_header}>Order by</h3>

          <button
            className={`${styles.toggleButton} ${sortOrder === "asc" ? styles.selected : ""}`}
            onClick={() => handleSortOrder("asc")}
          >
            <GoSortAsc fontSize="1.5em" />
            Ascending
          </button>
          <button
            className={`${styles.toggleButton} ${sortOrder === "desc" ? styles.selected : ""}`}
            onClick={() => handleSortOrder("desc")}
          >
            <GoSortDesc fontSize="1.5em" />
            Descending
          </button>
        </div>
      )}
    </div>
  );
}

export default SortDropdown;
