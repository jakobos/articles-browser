import axios from 'axios';
import { Article } from './types';

const API_URL = 'http://localhost:6010/articles';
const SPORTS_PATH = 'sports';
const FASHION_PATH = 'fashion';

const GET_ARTICLES = 'articles';

interface RawArticle {
  id: number;
  date: string;
  image: string;
  category: string;
  title: string;
  preamble: string;
}

interface RawArticleResponse {
  articles: RawArticle[];
  message?: string;
}

const parseArticle = (article: RawArticle): Article => {
  const { date, image } = article;
  const rawDate = new Date(date);
  const parsedDate = isNaN(rawDate.getMilliseconds()) ? null : rawDate;
  const parsedImageUrl = image === '' ? null : image;
  return {
    ...article,
    date: parsedDate,
    imageUrl: parsedImageUrl,
  };
};

const getArticles = async (path: string): Promise<Article[]> => {
  try {
    const res = await axios.get<RawArticleResponse>(`${API_URL}/${path}`);
    const { data } = res;

    const parsedArticles = data.articles.map((rawArticle) => parseArticle(rawArticle));
    return parsedArticles;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else {
      console.log('Error', error.message);
    }
  }
  return [];
};

const getSports = async (): Promise<Article[]> => {
  return getArticles(SPORTS_PATH);
};

const getFashion = async (): Promise<Article[]> => {
  return getArticles(FASHION_PATH);
};

const getAllArticles = async (): Promise<Article[]> => {
  const sports = await getSports();
  const fashion = await getFashion();
  return [...sports, ...fashion];
};

export { getSports, getFashion, getAllArticles, GET_ARTICLES };
