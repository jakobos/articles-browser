import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import Tooltip from '@mui/material/Tooltip';
import styles from './styles';
import { TestId } from './types';
import { parseDate } from './utils';

export const Img = styled('img')(styles.img);
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
  // ) : (
  //   <Tooltip sx={{}}title="No image available for this article">
  //     <ImageNotSupportedIcon fontSize="large" />
  //   </Tooltip>
  // );

  return (
    <Paper sx={styles.paper}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {image}
        </Grid>
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography test-id={TestId.Title} gutterBottom variant="subtitle1" component="div">
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
