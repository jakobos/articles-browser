import { SortMode } from '../../components/Sorting/types';
import { Article } from './types';

export const sortArticles = (sortMode: SortMode, articles: Article[]): Article[] => {
  switch (sortMode) {
    case SortMode.Ascending: {
      return articles.sort((articleA, articleB) => Number(articleA.date) - Number(articleB.date));
    }
    case SortMode.Descenfing: {
      return articles.sort((articleA, articleB) => Number(articleB.date) - Number(articleA.date));
    }
  }
};
