import React, { useEffect, useState } from 'react';
import { getTags } from '@/util/getResourceData';

function TagDropdown({ onTagSelect }) {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

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
    setSelectedTag(e.target.value);
    // onTagSelect(e.target.value);
  };

  return (
    <div className="max-w-sm inline-block py-8">
      <label htmlFor="tagDropdown">
        Search by Tags
      </label>
      <select
        id="tagDropdown"
        value={selectedTag}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
      >
        <option value="">Select a tag</option>
        {tags.map(tag => (
          <option key={tag.id} value={tag.tag}>
            {tag.tag}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TagDropdown;
