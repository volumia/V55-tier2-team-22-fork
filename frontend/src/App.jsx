import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/footer";
import ResourceList from "./components/Resources/ResourceList";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { useState } from "react";
import PaginationBar from "./components/Pagination/PaginationBar";

const itemsPerPage = 9;
const initialPage = 0;

function deriveRangeFromPageIndex(index) {
  return {
    min: index * itemsPerPage,
    max: index * itemsPerPage + itemsPerPage,
  };
}

function App() {
  const [displayRange, setDisplayRange] = useState(deriveRangeFromPageIndex(initialPage));

  function onPageIndexChange(index) {
    setDisplayRange(deriveRangeFromPageIndex(index));
  }

  return (
    <>
      {/* Header of the App */}
      <Header />
      {/* Search Bar */}
      <SearchBar />
      <PaginationBar
        firstItemIndex={displayRange.min}
        itemsPerPage={itemsPerPage}
        totalNumberOfItems={59}
        onChangePage={onPageIndexChange}
      ></PaginationBar>

      {/* Show the resources fetched from the API */}
      <ResourceList displayRange={displayRange} />

      {/* Footer of the App */}
      <Footer />
    </>
  );
}

export default App;
