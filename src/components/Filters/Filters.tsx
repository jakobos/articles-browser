import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import styles from './styles';
import { TestId } from './types';
import { Theme } from '@mui/material';

interface FiltersProps {
  title: string;
  filters: string[];
}

const Filters: React.FC<FiltersProps> = (props) => {
  const { title, filters } = props;

  const preparedFilters = filters.map((filter) => {
    return (
      <FormControlLabel
        test-id={`filter-${filter.toLowerCase()}`}
        control={<Checkbox />}
        label={filter}
      />
    );
  });

  return (
    <Paper sx={styles.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography test-id={TestId.Title} variant="subtitle1">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <FormGroup test-id={TestId.Filters}>{preparedFilters}</FormGroup>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Filters;
