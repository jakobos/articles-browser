import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllArticles, getFashion, getSports, GET_ARTICLES } from './queries';
import { SortMode, SortObject } from '../../components/Sorting';
import { Filter } from '../../components/Filters';
import { Article } from './types';
import { sortArticles } from './utils';
import { DataSources } from '../../types/types';
import ArticlesWidgetView from './view';

interface ArticlesWidgetProps {
  filters: Filter[];
}

const ArticlesWidgetContainer: React.FC<ArticlesWidgetProps> = (props) => {
  const [filters, setFilters] = useState<Filter[]>(props.filters);
  const [sortMode, setSortMode] = useState<SortMode>(SortMode.Descenfing);
  const [articles, setArticles] = useState<Article[]>([]);

  const handleQuery = () => {
    const activeFilters = filters.filter(({ enabled }) => enabled);
    if (activeFilters.length > 1) {
      return getAllArticles();
    }
    if (activeFilters[0].name === DataSources.Fashion) {
      return getFashion();
    }
    return getSports();
  };

  const queryEnabled = filters
    .map(({ enabled }) => enabled)
    .reduce((curr, next) => curr || next, false);

  const { isLoading, isError, data, error, refetch } = useQuery([GET_ARTICLES], handleQuery, {
    enabled: queryEnabled,
  });

  useEffect(() => {
    if (!isLoading && queryEnabled) {
      const sortedArticles = sortArticles(sortMode, data);
      setArticles(sortedArticles);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (articles.length > 0) {
      const sortedArticles = sortArticles(sortMode, articles);
      setArticles([...sortedArticles]);
    }
  }, [sortMode]);

  useEffect(() => {
    if (queryEnabled) {
      refetch();
    } else {
      setArticles([]);
    }
  }, [filters]);

  const handleFiltersChange = (filterName: string, enabled: boolean) => {
    const updatedFilters = filters.map((item) => {
      if (item.name === filterName) {
        return { ...item, enabled };
      }
      return item;
    });
    setFilters(updatedFilters);
  };

  const handleSortChange = (sortMode: SortMode) => {
    setSortMode(sortMode);
  };

  const sortingProps = {
    sortObject: SortObject.Date,
    mode: sortMode,
    handleChange: handleSortChange,
  };

  const filtersProps = {
    title: 'Data Sources',
    filters,
    handleFiltersChange,
  };

  const widgetProps = {
    filtersProps,
    sortingProps,
    articles,
    isLoading,
    isError,
    queryEnabled,
  };

  return <ArticlesWidgetView {...widgetProps} />;
};

export default ArticlesWidgetContainer;
