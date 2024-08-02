import { Link } from "react-router-dom";
import Article from "./Article"

const Content = ({ 
  articles = [],
  loading = false,
  currentTag = null
}) => {

  return (
    <div className="content">
      <ul className="nav nav-pills outline-active flex">
        <li className={`nav-item`}>
          <Link to="/" className={`nav-link ${!currentTag ? 'active' : ''}`}>Global Feed</Link>
        </li>
        {currentTag && (
          <li class="nav-item">
            <Link to="/" className={`nav-link ${currentTag ? 'active' : ''}`}>#{currentTag}</Link>
          </li>
        )}
      </ul>
      {loading ? <div className="pl-20">Loading articles...</div> : (
        <>
          {articles.map((article, index) => (
            <Article
              key={index}
              article={article}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Content;