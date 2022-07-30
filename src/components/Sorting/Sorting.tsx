import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { TestId, SortMode, SortObject } from './types';
import styles from './styles';

interface SortingProps {
  sortObject: SortObject;
  mode: SortMode;
}

const Sorting: React.FC<SortingProps> = (props) => {
  const { sortObject, mode } = props;
  const currentIcon =
    mode === SortMode.Ascending ? (
      <ArrowDropUpIcon fontSize="small" />
    ) : (
      <ArrowDropDownIcon fontSize="small" />
    );

  const currentTooltip = mode === SortMode.Ascending ? 'Ascending' : 'Descending';

  return (
    <Paper sx={styles.paper}>
      <Grid container spacing={0}>
        <Grid item>
          <Typography test-id={TestId.Title} variant="subtitle1">
            Sort by {sortObject}
          </Typography>
        </Grid>
        <Grid item>
          <Tooltip title={currentTooltip}>
            <IconButton test-id={TestId.Icon}>{currentIcon}</IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Sorting;
