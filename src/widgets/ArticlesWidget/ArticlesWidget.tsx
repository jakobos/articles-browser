import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Sorting, { SortMode, SortObject } from '../../components/Sorting';
import Filters from '../../components/Filters';
import ArticlesList from '../../components/ArticlesList';

const ArticlesWidget: React.FC = () => {
  const sortingProps = {
    sortObject: SortObject.Date,
    mode: SortMode.Ascending,
  };

  const filtersProps = {
    title: 'Data Sources',
    filters: ['Sport', 'Fashion'],
  };

  const articlesProps = {
    data: [
      {
        id: 1,
        date: '2. februar 2019',
        imageUrl: 'https://placeimg.com/280/180/nature',
        category: 'sport',
        title: 'Solskjær fikk klar beskjed fra Røkke og Gjelsten: – Ikke kom tilbake!',
        preamble:
          'Ole Gunnar Solskjær forteller om den spesielle samtalen med de to Molde-investorene.',
      },
      {
        id: 2,
        date: '3. februar 2019',
        imageUrl: 'https://placeimg.com/280/180/nature',
        category: 'sport',
        title: 'Solskjær fikk klar beskjed fra Røkke og Gjelsten: – Ikke kom tilbake!',
        preamble:
          'Ole Gunnar Solskjær forteller om den spesielle samtalen med de to Molde-investorene.',
      },
    ],
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
            <ArticlesList {...articlesProps} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ArticlesWidget;
