import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/footer";
import ResourceList from "./components/Resources/ResourceList";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { useEffect, useState } from "react";
import PaginationBar from "./components/Pagination/PaginationBar";
import { getResources } from "./util/getResourceData";

const pageSize = 9;
const initialPage = 0;

function deriveRangeFromPageIndex(index) {
  return {
    min: index * pageSize,
    max: index * pageSize + pageSize,
  };
}

function App() {
  const [resources, setResources] = useState([]);
  const [itemDisplayRange, setItemDisplayRange] = useState(deriveRangeFromPageIndex(initialPage));

  function onPageIndexChange(index) {
    setItemDisplayRange(deriveRangeFromPageIndex(index));
  }

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
      <SearchBar />
      
      {/* Show the resources fetched from the API */}
      <ResourceList displayRange={itemDisplayRange} />
      <PaginationBar
        firstItemIndex={itemDisplayRange.min}
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
