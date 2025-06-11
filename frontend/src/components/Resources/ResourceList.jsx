import ResourceCard from "./ResourceCard";

function ResourceList({ resourceList, tagMap }) {
  return (
    <>
      <div className="w-[100%] mx-auto">
        {/* Outer wrapper: 80% width, centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {resourceList.map((resource) => {
            // Convert tag IDs to tag names
            const convertedTag = (resource.appliedTags || []).map((id) => tagMap[id] || "Unknown");

            return (
              <ResourceCard
                key={resource.id}
                title={resource.name}
                url={resource.url}
                author={resource.author}
                date={resource.createdAt}
                tags={convertedTag}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ResourceList;
