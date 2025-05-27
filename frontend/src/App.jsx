import "./App.css";
import Header from './components/Header/Header.jsx';
import Footer from "./components/Footer/footer";
import ResourceList from "./components/Resources/ResourceList";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import TagDropdown from './components/SearchBar/TagDropdown';

function App() {
  return (
    <>
      {/* Header of the App */}
      <Header/>

      {/* Search Bar */}
      <SearchBar/>

      {/* Tags Dropdown Selection */}
      <TagDropdown/>

      {/* Show the resources fetched from the API */}
      <ResourceList/>

      {/* Footer of the App */}
      <Footer/>
    </>
  );
}

export default App;
