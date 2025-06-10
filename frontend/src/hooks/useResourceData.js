import { useState, useEffect } from "react";
import { getResources, getTags } from "@/util/getResourceData";

export function useResourceData() {
  const [status, setStatus] = useState("loading"); //loading, failed, succeeded
  const [resources, setResources] = useState([]);
  const [tags, setTags] = useState(null); // null until loaded
  const [idToTagMap, setIdToTagMap] = useState(null); // null until loaded

  async function fetchData() {
    setStatus("loading");

    try {
      const [resourcesData, tagsData] = await Promise.all([getResources(), getTags()]);

      // Make an object that maps tag IDs to their names
      const tagMap = {};
      tagsData.forEach((tag) => {
        tagMap[String(tag.id)] = tag.tag;
      });

      setResources(resourcesData);
      setTags(tagsData);
      setIdToTagMap(tagMap);
      setStatus("succeeded");
    } catch (error) {
      console.error("Failed to fetch resources or tags:", error);
      setStatus("failed");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    resources,
    tags,
    idToTagMap,
    status,
    fetchData
  };
}
