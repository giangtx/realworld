import { fetchApi } from ".";

export const fetchArticlesApi = async (page = 1, limit = 10, tag = null) => {
    const params = {
        limit,
        offset: (page - 1) * limit,
        tag
    };
    return await fetchApi.get("/articles", { params });
};

export const fetchTagsApi = async () => {
    return await fetchApi.get("/tags");
}