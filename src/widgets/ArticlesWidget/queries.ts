import { raw } from '@storybook/react';
import axios from 'axios';
import { isEmpty } from 'lodash';
import { Article, ArticlesData } from './types';

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
}

const parseArticle = (article: RawArticle): Article => {
  const { date, image } = article;
  const rawDate = new Date(date);
  const parsedDate = isNaN(rawDate.getMilliseconds()) ? null : rawDate;
  const parsedImageUrl = isEmpty(image) ? null : image;
  return {
    ...article,
    date: parsedDate,
    imageUrl: parsedImageUrl,
  };
};

const getArticles = async (path: string): Promise<ArticlesData> => {
  const res = await axios.get<RawArticleResponse>(`${API_URL}/${path}`);

  const parsedArticles = res.data.articles.map((rawArticle) => parseArticle(rawArticle));

  return { articles: parsedArticles };
};

const getSports = async (): Promise<ArticlesData> => {
  return getArticles(SPORTS_PATH);
};

const getFashion = async (): Promise<ArticlesData> => {
  return getArticles(FASHION_PATH);
};

export { getSports, getFashion, GET_ARTICLES };
