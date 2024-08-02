import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <div className="article-preview">
      <div className="article-meta flex justify-between">
        <div className="flex gap-[0.3rem]">
          <Link to={`/profile/${article.author.username}`}>
            <img src={article.author.image} alt={article.author.username} className=""/>
          </Link>
          <div className="info">
            <Link to={`/profile/${article.author.username}`} className="author">
              {article.author.username}
            </Link>
            <p className="date">{article.createdAt}</p>
          </div>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
          {article.favoritesCount}
        </button>
      </div>
      <Link to={`/article/${article.slug}`} className="preview-link">
        <h2>{article.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: article.description }} />
        <div className="flex justify-between">
          <span>Read more...</span>
          <ul className="tag-list flex gap-1">
            {article.tagList.map((tag, index) => (
              <li key={index} className="tag-default tag-pill tag-outline">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  )
}

export default Article;