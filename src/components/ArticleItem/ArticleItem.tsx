import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from './styles';

export const Img = styled('img')(styles.img);
interface ArticleItemProps {
  id: number;
  date: string;
  imageUrl: string;
  category: string;
  title: string;
  preamble: string;
}

const ArticleItem: React.FC<ArticleItemProps> = (props) => {
  const { date, imageUrl, title, preamble } = props;

  return (
    <Paper sx={styles.paper}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Img src={imageUrl} />
        </Grid>
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {title}
              </Typography>
              <Typography variant="body2" gutterBottom display={{ xs: 'none', sm: 'block' }}>
                {preamble}
              </Typography>
            </Grid>
            <Grid item display={{ xs: 'block', sm: 'none' }}>
              <Typography variant="subtitle2" component="div">
                {date}
              </Typography>
            </Grid>
          </Grid>
          <Grid item display={{ xs: 'none', sm: 'block' }}>
            <Typography variant="subtitle2" component="div">
              {date}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ArticleItem;
