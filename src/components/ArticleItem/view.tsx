import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import commonStyles from '../../utils/commonStyles';
import styles from './styles';
import { TestId } from './types';
import { parseDate } from './utils';

const Img = styled('img')(styles.img);
export interface ArticleItemProps {
  id: number;
  date: Date | null;
  imageUrl: string | null;
  category: string;
  title: string;
  preamble: string;
}

const ArticleItem: React.FC<ArticleItemProps> = (props) => {
  const { date, imageUrl, title, preamble } = props;

  const parsedDate = parseDate(date);
  const image = imageUrl ? <Img test-id={TestId.Image} src={imageUrl} /> : null;

  return (
    <Paper sx={commonStyles.paper}>
      <Grid container spacing={2}>
        <Grid item xs={4} sx={styles.imageGrid}>
          {image}
        </Grid>
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography test-id={TestId.Title} gutterBottom variant="h6" component="div">
                {title}
              </Typography>
              <Typography
                test-id={TestId.Preamble}
                variant="body2"
                gutterBottom
                display={{ xs: 'none', sm: 'block' }}
              >
                {preamble}
              </Typography>
            </Grid>
            <Grid item display={{ xs: 'block', sm: 'none' }}>
              <Typography test-id={TestId.Date} variant="subtitle2" component="div">
                {parsedDate}
              </Typography>
            </Grid>
          </Grid>
          <Grid item display={{ xs: 'none', sm: 'block' }}>
            <Typography test-id={TestId.Date} variant="subtitle2" component="div">
              {parsedDate}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ArticleItem;
