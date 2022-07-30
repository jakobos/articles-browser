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

export interface Filter {
  name: string;
  enabled: boolean;
}
interface FiltersProps {
  title: string;
  filters: Filter[];
  handleFiltersChange: (filterName: string, enabled: boolean) => void;
}

const Filters: React.FC<FiltersProps> = (props) => {
  const { title, filters, handleFiltersChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFiltersChange(event.target.name, event.target.checked);
  };

  const preparedFilters = filters.map((filter) => {
    const { name, enabled } = filter;
    return (
      <FormControlLabel
        key={`${name}-key`}
        test-id={`filter-${name.toLowerCase()}`}
        control={<Checkbox checked={enabled} onChange={handleChange} name={name} />}
        label={name}
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
