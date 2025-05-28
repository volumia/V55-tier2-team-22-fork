import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/footer";
import ResourceList from "./components/Resources/ResourceList";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { useState } from "react";
import PaginationBar from "./components/Pagination/PaginationBar";

const pageSize = 9;
const initialPage = 0;

function deriveRangeFromPageIndex(index) {
  return {
    min: index * pageSize,
    max: index * pageSize + pageSize,
  };
}

function App() {
  const [itemDisplayRange, setItemDisplayRange] = useState(deriveRangeFromPageIndex(initialPage));

  function onPageIndexChange(index) {
    setItemDisplayRange(deriveRangeFromPageIndex(index));
  }

  return (
    <>
      {/* Header of the App */}
      <Header />
      {/* Search Bar */}
      <SearchBar />
      <PaginationBar
        firstItemIndex={itemDisplayRange.min}
        pageSize={pageSize}
        totalItems={59}
        onChangePage={onPageIndexChange}
      ></PaginationBar>

      {/* Show the resources fetched from the API */}
      <ResourceList displayRange={itemDisplayRange} />

      {/* Footer of the App */}
      <Footer />
    </>
  );
}

export default App;
