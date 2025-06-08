import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/footer";
import ResourceList from "./components/Resources/ResourceList";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { useEffect, useState } from "react";
import PaginationBar from "./components/Pagination/PaginationBar";
import { getResources } from "./util/getResourceData";
import { computeRangeFromPageIndex } from "./util/pagination";
import TagDropdown from './components/SearchBar/TagDropdown';

const initialPageIndex = 0;
const pageSize = 9;

function App() {
  // for pagination
  const [resources, setResources] = useState([]);
  const [itemDisplayRange, setItemDisplayRange] = useState(computeRangeFromPageIndex(initialPageIndex, pageSize));
  // for searching by Tags
  const [selectedTags, setSelectedTags] = useState([]);
  // for search input
  const [searchTerm, setSearchTerm] = useState('');

  function onPageIndexChange(index) {
    setItemDisplayRange(computeRangeFromPageIndex(index, pageSize));
  }

  // Clear all function
  const handleClearAll = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  useEffect(() => {
    async function initResources() {
      const rec = await getResources();
      setResources(rec);
    }

    initResources();
  }, []);

  return (
    <>
      {/* Header of the App */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onClearAll={handleClearAll}
        selectedTags={selectedTags}
      />

      {/* Tags Dropdown Selection */}
      <TagDropdown
        onTagSelect={setSelectedTags}
        selectedTags={selectedTags}
      />

      {/* Show the resources fetched from the API */}
      <ResourceList displayRange={itemDisplayRange} selectedTags={selectedTags} />

      {/* Pagination */}
      <PaginationBar
        firstItemIndex={itemDisplayRange.start}
        pageSize={pageSize}
        totalItems={resources.length}
        maxVisiblePageButtons={5}
        onChangePage={onPageIndexChange}
      ></PaginationBar>

      {/* Footer of the App */}
      <Footer />
    </>
  );
}

export default App;