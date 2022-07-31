import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { TestId, SortMode, SortObject } from './types';
import commonStyles from '../../utils/commonStyles';

export interface SortingProps {
  sortObject: SortObject;
  mode: SortMode;
  handleChange: (mode: SortMode) => void;
}

const Sorting: React.FC<SortingProps> = (props) => {
  const { sortObject, mode, handleChange } = props;

  const handleChangeSortingMode = () => {
    const nextSortMode = mode === SortMode.Ascending ? SortMode.Descenfing : SortMode.Ascending;
    handleChange(nextSortMode);
  };

  const currentIcon =
    mode === SortMode.Ascending ? (
      <ArrowDropUpIcon fontSize="small" />
    ) : (
      <ArrowDropDownIcon fontSize="small" />
    );

  const currentTooltip = mode === SortMode.Ascending ? 'Ascending' : 'Descending';

  return (
    <Paper sx={commonStyles.paper}>
      <Grid container spacing={0} alignItems={'center'} justifyContent={'end'}>
        <Grid item xs={6} sm={2}>
          <Typography test-id={TestId.Title} variant="subtitle1">
            Sort by {sortObject}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={1}>
          <Tooltip title={currentTooltip}>
            <IconButton test-id={TestId.Icon} onClick={handleChangeSortingMode}>
              {currentIcon}
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Sorting;
