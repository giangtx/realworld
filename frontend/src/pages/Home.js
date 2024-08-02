import { useEffect, useState } from "react";
import Content from "../components/Home/Content";
import { fetchTagsApi, fetchArticlesApi } from "../api/articles";
import Paginate from "../components/Common/Paginate";
import { useLocation } from "react-router-dom";
import Tags from "../components/Home/Tags";

const Home = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const currentTag = searchParams.get("tag");
  const [articles, setArticles] = useState([]);
  const [articlesCount, setArticlesCount] = useState(0);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingTags, setLoadingTags] = useState(false);

  useEffect(() => {
    fetchTags();
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [location.search]);

  const fetchArticles = async () => {
    setLoading(true);
    const response = await fetchArticlesApi(currentPage || 1, 10, currentTag);
    setArticles(response.articles);
    setArticlesCount(response.articlesCount);
    setLoading(false);
  }

  const fetchTags = async () => {
    setLoadingTags(true);
    const response = await fetchTagsApi();
    setTags(response.tags);
    setLoadingTags(false);
  }

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container flex flex-col justify-center items-center">
          <h1>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
      <div className="container grid grid-cols-12 gap-[30px]">
        <div className="col-span-9">
          <Content
            articles={articles}
            loading={loading}
            currentTag={currentTag}
          />
          {!loading && (
            <Paginate
              articlesCount={articlesCount}
              currentPage={currentPage}
            />  
          )}
        </div>
        <div className="col-span-3">
          {loadingTags ? <div>Loading tags...</div> : (
            <Tags
              tags={tags}
            />
          )}
          
        </div>
      </div>
    </div>
  )
};

export default Home;