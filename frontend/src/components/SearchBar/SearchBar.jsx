import styles from './SearchBar.module.css';

function SearchBar({ searchTerm, setSearchTerm, onClearAll }) {

  return (
    <div className={styles.input_container}>

      <input
        type="text"
        placeholder="Search..."
        className={styles.search_bar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Clear all button */}
      {(searchTerm) && (
        <button
          className={styles.clear_button}
          onClick={onClearAll}
        >
          clear all
        </button>
      )}

      {/* Remove icon */}
      {searchTerm && (
        <button
          className={styles.remove_icon}
          onClick={() => setSearchTerm('')}
        >
          ×
        </button>
      )}

    </div>
  );
}

export default SearchBar;