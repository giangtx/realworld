import { Link, useLocation } from "react-router-dom";
const limit = 10;
const Paginate = ({ currentPage, articlesCount = 0}) => {

  const location = useLocation();

  const getSearchUrl = (page) => {
    const searchParams = new URLSearchParams(location.search);

    searchParams.set("page", page);

    return searchParams.toString();
  }

  return (
    <ul className="pagination">
      {Array.from(Array(Math.ceil(articlesCount / limit)), (_, i) => (
        <li key={i} className={`page-item ${currentPage == (i + 1) ? 'active': ''}`}>
          <Link to={{
            pathname: "",
              search: getSearchUrl(i + 1),
            }} className="page-link">{i + 1}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Paginate;