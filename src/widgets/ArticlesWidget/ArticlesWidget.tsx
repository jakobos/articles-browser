import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getFashion, getSports, GET_ARTICLES } from './queries';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sorting, { SortMode, SortObject } from '../../components/Sorting';
import Filters, { Filter } from '../../components/Filters';
import ArticlesList from '../../components/ArticlesList';
import { Article } from './types';
import { sortArticles } from './utils';

interface ArticlesWidgetProps {
  filters: Filter[];
}

const ArticlesWidget: React.FC<ArticlesWidgetProps> = (props) => {
  const [filters, setFilters] = useState<Filter[]>(props.filters);
  const [sortMode, setSortMode] = useState<SortMode>(SortMode.Descenfing);
  const [articles, setArticles] = useState<Article[]>([]);

  const handleQuery = () => {
    // filters.filter(({enabled}) => enabled)
    return getSports();
  };

  const { isLoading, isError, data, error } = useQuery(GET_ARTICLES, handleQuery);

  useEffect(() => {
    if (!isLoading) {
      const sortedArticles = sortArticles(sortMode, data.articles);
      setArticles(sortedArticles);
    }
  }, [isLoading, data, sortMode]);

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

  return (
    <Container fixed>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Sorting {...sortingProps} />
        </Grid>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <Filters {...filtersProps} />
          </Grid>
          <Grid item>
            {isLoading ? (
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            ) : (
              <ArticlesList data={articles} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticlesWidget;
