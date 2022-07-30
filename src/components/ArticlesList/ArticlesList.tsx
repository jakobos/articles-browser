import React from 'react';
import ArticleItem, { ArticleItemProps } from '../ArticleItem';
import Stack from '@mui/material/Stack';
import { TestId } from './types';
import styles from './styles';

interface ArticlesListProps {
  data: ArticleItemProps[];
}

const ArticlesList: React.FC<ArticlesListProps> = (props) => {
  const { data } = props;
  const articles = data.map((articleData) => (
    <ArticleItem test-id={TestId.ArticleItem} key={articleData.id} {...articleData} />
  ));
  return (
    <Stack spacing={2} sx={styles.stack}>
      {articles}
    </Stack>
  );
};

export default ArticlesList;
