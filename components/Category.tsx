import React from 'react';

interface CategoryProps {
  setSelectedTag: (tag: string | null) => void;
  tag: string;
  selectedTag: string | null;
}

export default function Category({ setSelectedTag, tag, selectedTag }: CategoryProps) {
  const handleTagClick = (clickedTag: string) => {
    if (selectedTag === clickedTag) {
      return setSelectedTag(null);
    }
    return setSelectedTag(clickedTag);
  };

  return (
    <div
      key={tag}
      onClick={() => handleTagClick(tag)}
      className={`${
        selectedTag === tag && 'ring-2 ring-gray-400 text-gray-700'
      } inline-flex items-center px-3 py-1.5 uppercase bg-gray-100 rounded cursor-pointer`}
    >
      <span className="text-xs font-medium uppercase">{tag || 'All'}</span>
    </div>
  );
}
