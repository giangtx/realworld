import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Tags = ({ tags = [] }) => {
  const location = useLocation();
  const currentTag = new URLSearchParams(location.search).get("tag");

  const getSearchUrl = (tag) => {
    const searchParams = new URLSearchParams(location.search);

    searchParams.set("tag", tag);

    return searchParams.toString();
  }

  return (
    <div className="tags-sidebar">
      <h3>Popular Tags</h3>
      <div className="tags-list">
        {tags.map((tag) => (
        <Link 
          to={{
            pathname: "",
            search: getSearchUrl(tag),
          }} 
          key={tag}
          className={`tag-default tag-pill ${currentTag === tag ? 'tag-active': ''}`}
        >
          {tag}
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags;