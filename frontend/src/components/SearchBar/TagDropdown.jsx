import React, { useEffect, useState } from 'react';
import { getTags } from '@/util/getResourceData';

function TagDropdown({ onTagSelect }) {
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]); // Array for multi-select

async function fetchData() {
      try {
        const tagsData = await getTags();
        setTags(tagsData);
      }

      catch (error) {
        console.error('Failed to fetch tags:', error);
      }
    }

  useEffect(() => {
     fetchData();
    }, []);


  const handleChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setSelectedTags(selectedOptions);
    // onTagSelect(selectedOptions); //pass tags to parent component
  };

  
    console.log(selectedTags)

  return (
    <div className="max-w-sm inline-block py-8">
      <label htmlFor="tagDropdown">
        Search by Tags:
      </label>
      <select
        id="tagDropdown"
        multiple
        value={selectedTags}
        onChange={handleChange}
        className="w-full px-3 py-1 border border-cyan-400 rounded-md focus:outline-none focus:ring-1 focus:ring-sky-600 focus:border-sky-600"
      >
        <option value="" className='bg-black'>Select a tag</option>
        {tags.map(tag => (
          <option key={tag.id} value={tag.tag} className='bg-black-100'>
            {tag.tag}
          </option>
        ))}
      </select>

      {selectedTags.length > 0 && (
        <div className="max-w-50 mt-2 text-sm text-gray-600">
          Selected: {selectedTags.join(', ')}
        </div>
      )}

    </div>
  );
}

export default TagDropdown;
