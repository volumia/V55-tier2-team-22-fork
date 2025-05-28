import "./App.css";
import React, {useState} from 'react';
import Header from './components/Header/Header.jsx';
import Footer from "./components/Footer/footer";
import ResourceList from "./components/Resources/ResourceList";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import TagDropdown from './components/SearchBar/TagDropdown';

function App() {
  const [ selectedTags, setSelectedTags ] = useState([])
  return (
    <>
      {/* Header of the App */}
      <Header/>

      {/* Search Bar */}
      <SearchBar/>

      {/* Tags Dropdown Selection */}
      <TagDropdown onTagSelect={setSelectedTags}/>

      {/* Show the resources fetched from the API */}
      <ResourceList selectedTags={selectedTags} />

      {/* Footer of the App */}
      <Footer/>
    </>
  );
}

export default App;
