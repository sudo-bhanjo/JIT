// SearchResults.jsx
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get("q");

  return (
    <div className="pt-32 px-4">
      <h1 className="text-2xl font-bold">Search Results for: {query}</h1>
      {/* Display your actual results here */}
    </div>
  );
};

export default SearchResults;
