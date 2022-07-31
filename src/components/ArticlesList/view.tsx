import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ArticleItem, { ArticleItemProps } from '../ArticleItem';
import { TestId } from './types';
import commonStyles from '../../utils/commonStyles';

interface ArticlesListProps {
  data: ArticleItemProps[];
}

const ArticlesList: React.FC<ArticlesListProps> = (props) => {
  const { data } = props;
  const articles = data.map((articleData) => (
    <ArticleItem test-id={TestId.ArticleItem} key={articleData.id} {...articleData} />
  ));
  return (
    <Stack spacing={4}>
      {articles.length > 0 ? (
        articles
      ) : (
        <Paper sx={commonStyles.paper}>
          <Typography variant="subtitle1" component="div" textAlign={'center'}>
            No results
          </Typography>
        </Paper>
      )}
    </Stack>
  );
};

export default ArticlesList;
