import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Sorting from '../../components/Sorting';
import Filters from '../../components/Filters';
import ArticlesList from '../../components/ArticlesList';
import LoadingProgress from '../../components/LoadingProgress';
import { SortingProps } from '../../components/Sorting';
import { FiltersProps } from '../../components/Filters';
import { ArticleItemProps } from '../../components/ArticleItem';

interface ArticlesWidgetViewProps {
  sortingProps: SortingProps;
  filtersProps: FiltersProps;
  articles: ArticleItemProps[];
  isLoading: boolean;
  isError: boolean;
  queryEnabled: boolean;
}

const ArticlesWidgetView: React.FC<ArticlesWidgetViewProps> = (props) => {
  const { sortingProps, filtersProps, articles, isLoading, queryEnabled } = props;
  return (
    <Container fixed>
      <Grid container spacing={4}>
        <Grid item xs={6} sm={12} order={{ xs: 2, sm: 1 }}>
          <Sorting {...sortingProps} />
        </Grid>
        <Grid item xs={6} sm={3} order={{ xs: 1, sm: 2 }}>
          <Filters {...filtersProps} />
        </Grid>
        <Grid item xs={12} sm={9} order={{ xs: 3 }}>
          {isLoading && queryEnabled ? <LoadingProgress /> : <ArticlesList data={articles} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticlesWidgetView;
