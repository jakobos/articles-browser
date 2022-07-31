import React from 'react';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sorting, { SortMode, SortObject } from '../../components/Sorting';
import Filters, { Filter } from '../../components/Filters';
import ArticlesList from '../../components/ArticlesList';
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
  const { sortingProps, filtersProps, articles, isLoading, isError, queryEnabled } = props;
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
            {isError && 'Error :('}
            {isLoading && queryEnabled ? (
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

export default ArticlesWidgetView;
